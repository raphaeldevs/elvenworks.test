import path from 'path'

import dotenv from 'dotenv'

dotenv.config({ path: path.resolve('.env.local') })

const {
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_PORT
} = process.env

export default {
  type: 'postgres',
  host: DATABASE_HOST,
  username: DATABASE_USER,
  database: DATABASE_NAME,
  password: DATABASE_PASSWORD,
  port: DATABASE_PORT,
  entities: [path.resolve('src', 'models', '**.ts')],
  migrations: [path.resolve('src', 'database', 'migrations', '**.ts')],
  cli: {
    migrationsDir: path.resolve('src', 'database', 'migrations')
  }
}
