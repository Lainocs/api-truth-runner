import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Mission from './mission.js'

export default class Character extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare firstname: string

  @column()
  declare lastname: string

  @column()
  declare race: 'human' | 'robot' | 'alien' | 'other'

  @column()
  declare strength: number

  @column()
  declare intelligence: number

  @column()
  declare dexterity: number

  @column()
  declare charisma: number

  @column()
  declare constitution: number

  @column()
  declare wisdom: number

  @column()
  declare profilePicture: string

  @column()
  declare backgroundImage: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @manyToMany(() => Mission, {
    pivotTable: 'missions_characters'
  })
  declare missions: ManyToMany<typeof Mission>

}