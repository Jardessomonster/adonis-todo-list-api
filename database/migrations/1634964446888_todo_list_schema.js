'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TodoListSchema extends Schema {
  up () {
    this.create('todo_lists', (table) => {
      table.increments()
      table.string('topic').notNullable();
      table.boolean('is_public').defaultTo(true);
      table.integer('owner_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('todo_lists')
  }
}

module.exports = TodoListSchema
