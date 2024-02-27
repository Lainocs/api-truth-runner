import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'characters'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('firstname')
      table.string('lastname')
      table.enum('race', ['human', 'robot', 'alien', 'other'])
      table.integer('strength')
      table.integer('intelligence')
      table.integer('dexterity')
      table.integer('charisma')
      table.integer('constitution')
      table.integer('wisdom')
      table.text('profile_picture')
      table.text('background_image')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}