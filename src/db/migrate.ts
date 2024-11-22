import { drizzle } from 'drizzle-orm/vercel-postgres'
import { migrate } from 'drizzle-orm/vercel-postgres/migrator'
import { createPool } from '@vercel/postgres'
import './envConfig'

async function main() {
  const pool = createPool({
    connectionString: process.env.POSTGRES_URL,
  })
  const db = drizzle(pool)

  console.log('Running migrations...')

  await migrate(db, { migrationsFolder: 'drizzle' })

  console.log('Migrations completed!')

  await pool.end()
}

main().catch((err) => {
  console.error('Migration failed!')
  console.error(err)
  process.exit(1)
})
