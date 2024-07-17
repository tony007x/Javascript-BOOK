import { serial, text, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id"),
  email: text("email").notNull(),
  password: text("password").notNull()
});