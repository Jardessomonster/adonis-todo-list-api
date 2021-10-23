'use strict';

const TaskModel = use('App/Models/Task');

class TaskRepository {
    async execute (todoListData, TaskData) {
        try {
            return await TaskModel.create({
                todo_list_id: todoListData.id,
                ...TaskData
            });
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = new TaskRepository();