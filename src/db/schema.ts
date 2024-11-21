import { pgTable, timestamp, varchar, uuid } from 'drizzle-orm/pg-core'

export const customers = pgTable('customers', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  customerId: varchar('customer_id', { length: 255 }).notNull().unique(),
  purchaseDate: timestamp('purchase_date').defaultNow(),
  priceId: varchar('price_id', { length: 255 }).notNull(),
})

export type Customer = typeof customers.$inferSelect
export type NewCustomer = typeof customers.$inferInsert
