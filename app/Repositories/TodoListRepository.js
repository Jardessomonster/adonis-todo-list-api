'use strict';

const ToDoListModel = use('App/Models/TodoList');

class TodoListRepository {
    async execute (userData, todoListData) {
        try {
            return await ToDoListModel.create({
                owner_id: userData.id,
                ...todoListData
            });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = new TodoListRepository();