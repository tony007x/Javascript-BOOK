import { serial, text, pgTable, timestamp, primaryKey, unique, integer } from "drizzle-orm/pg-core";

// Define the user table
export const user = pgTable("user", {
  id: serial("id").notNull().primaryKey(),
  username: text("username").unique().notNull(),
  email: text("email"),
  password: text("password"),
  created_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});

// Define the post table
export const post = pgTable('post', {
  post_ID: serial('post_ID').primaryKey(),
  username: text('username').references(() => user.username).notNull(),
});

// Define the postData table
export const postData = pgTable('postData', {
  post_ID: integer('post_ID').references(() => post.post_ID).notNull(), 
  title: text("title").notNull(),
  text: text('text').notNull(),
  created_at: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
});
