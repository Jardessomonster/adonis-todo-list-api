'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TodoList extends Model {
    static get table () {
        return 'todo_lists';
    }

    static get hidden () {
        return ['created_at', 'updated_at'];
    }

    static scopeListPublics (query) {
        return query
            .where('is_public', true)
            .with('tasks', query => {
                query
                    .orderBy('is_priority', 'DESC')
            })
            .orderBy('created_at')
    }

    tasks () {
        return this.hasMany('App/Models/Task');
    }
}

module.exports = TodoList
