import { createClient, createPool } from '@vercel/postgres'
import { drizzle } from 'drizzle-orm/vercel-postgres'
import { NewCustomer, customers } from './schema'
import { eq, count } from 'drizzle-orm'

const client = createPool({
  connectionString: process.env.POSTGRES_URL,
})

// Add schema type to drizzle instance
export const db = drizzle(client, { schema: { customers } })

export async function createCustomer(data: NewCustomer) {
  return await db.insert(customers).values(data).returning()
}

export async function getCustomerByEmail(email: string) {
  return await db.query.customers.findFirst({
    where: (customers, { eq }) => eq(customers.email, email),
  })
}

export async function getPaidCustomersCount() {
  try {
    const result = await db.select({ count: count() }).from(customers)

    return result[0].count
  } catch (error) {
    console.error('Error counting paid members:', error)
    throw error
  }
}
