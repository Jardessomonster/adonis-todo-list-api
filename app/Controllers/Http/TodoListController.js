'use strict';

const TodoListModel = use('App/Models/TodoList');
const TodoListRepository = use('App/Repositories/TodoListRepository');

class TodoListController {
    async index () {
        return await TodoListModel.query()
            .listPublics()
            .fetch();
    }

    async show ({ params, response, auth }) {
        try {
            const todoList = await TodoListModel.find(params.id);
            await todoList.load('tasks', query => {
                query.orderBy('is_priority', 'DESC')
            });
            const user = await auth.getUser();
            
            if (!todoList.is_public && user.id !== todoList.owner_id)
                return response.status(401).json({ message: 'You are not allowed to see this!' });
            
            return todoList;
        }
        catch (error) {
            return response.status(400).json({ message: error.message });
        }

    }

    async store ({ request, response, auth }) {
        try {
            const user = await auth.getUser();
            const data = request.only([
                'topic',
                'is_public',
            ]);

            const list = await TodoListRepository.execute(user, data);
            response.status(201);
            return list;
        }
        catch (error) {
            return response.status(400).json({ message: error.message })
        }
    }

}

module.exports = TodoListController;
