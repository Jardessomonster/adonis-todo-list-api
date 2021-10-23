'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TasksSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.string('description').notNullable();
      table.integer('todo_list_id')
        .references('id')
        .inTable('todo_lists')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.boolean('is_priority').defaultTo(false);
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TasksSchema
