// import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    user: "postgres",
    password: "15967241_Za",
    host: "localhost",
    port: 5432,
    database: "javascriptBook",
    ssl: false
  },
  verbose: true,
  strict: true,
  out: "./drizzle",
})