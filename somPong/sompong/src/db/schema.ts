import { serial, text, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey().notNull(),
  username: text("username").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull()
});