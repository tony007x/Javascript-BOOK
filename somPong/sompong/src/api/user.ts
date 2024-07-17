import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './../db/schema';
import { Hono } from 'hono'
import { Client } from 'pg';
import { user } from './../db/schema';
import { Wretch } from 'wretch';
import { error } from 'console';

const app = new Hono()
const client = new Client({
    user: "postgres",
    password: "15967241_Za",
    host: "localhost",
    port: 5432,
    database: "javascriptBook",
    ssl: false
})
client.connect();
const db = drizzle(client, { schema })

app.post('/signup', async (c) => {
    const json = await c.req.json();


    const email = json.email;
    const password = json.password;
    const passwordConfirm = json.passwordConfirm;

    if (password.length < 8) {
        console.log("Password must be at least 8 Characters!")
        return c.json({ meassge: "Password must be at least 8 Characters!" }, 401)
    }
    else {
        if (password != passwordConfirm) {
            console.log(password)
            console.log(passwordConfirm)
            console.log("It is not a same password!")
            return c.json({ message: "ConfirmPassword inCorrect!" }, 401)
            
        }
    }

    await db.insert(user).values(
        {
            id: 1,
            email: email,
            password: password
        });

        return await Wretch().url
    return c.json({ message: "SignUp Success!" }, 200)
})

export default app