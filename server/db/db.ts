import config from './knexfile'
import knex from 'knex'
import { Sport } from '../../model/Sport'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getWidgets(db = connection): Promise<Sport[]> {
  return db('widgets').select()
}
