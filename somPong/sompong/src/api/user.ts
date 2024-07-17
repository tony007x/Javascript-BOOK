import { Hono } from 'hono'

const app = new Hono()


app.post('/signup', async (c) => {
    const json = await c.req.json();
    
    console.log(json.email)
    return c.json(json)
})

export default app