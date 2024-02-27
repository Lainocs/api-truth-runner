import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Character from './character.js'

export default class Mission extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare sponsor: string

  @column()
  declare type: 'action' | 'investigation' | 'infiltration' | 'traitor'
  
  @column()
  declare enemyId: number

  @column()
  declare briefing: string

  @column()
  declare status: 'open' | 'in_progress' | 'completed'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Character, {
    pivotTable: 'missions_characters'
  })
  declare characters: ManyToMany<typeof Character>
}