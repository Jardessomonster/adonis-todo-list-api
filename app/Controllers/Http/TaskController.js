'use strict'

const TaskRepository = use('App/Repositories/TaskRepository');

class TaskController {
  async store ({ request, params, response, auth }) {
    try {
        const user = await auth.getUser();
        const data = request.only([
            'description',
            'is_priority',
        ]);

        const todoList = await user.todoList().where('id', params.id).first();

        if (!todoList) throw new Error('You must create a TODO list first!');

        const task = await TaskRepository.execute(todoList, data);
        response.status(201);
        return task;
    }
    catch (error) {
        return response.status(400).json({ message: error.message })
    }
  }
}

module.exports = TaskController
