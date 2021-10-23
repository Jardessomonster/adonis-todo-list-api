'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
    static get table () {
        return 'tasks';
    }

    static get hidden () {
        return ['created_at', 'updated_at'];
    }

    todoList () {
        return this.belongsTo('App/Models/TodoList');
    }
}

module.exports = Task
