import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import userAPI from "./api/user"
import post from "./api/post"

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/user/', userAPI);
app.route('/api/post/', post );

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})