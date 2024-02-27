import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'missions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title')
      table.string('sponsor')
      table.enum('type', ['action', 'investigation', 'infiltration', 'traitor'])
      table.integer('enemy_id').unsigned().references('id').inTable('enemies')
      table.text('briefing')
      table.enum('status', ['open', 'in_progress', 'completed'])
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}