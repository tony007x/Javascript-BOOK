import { drizzle } from 'drizzle-orm/node-postgres';
import { eq, lt, gte, ne, count, and, like, notLike, notIlike } from 'drizzle-orm';
import * as schema from './../db/schema';
import { Hono } from 'hono'
import { Client } from 'pg';
import { user } from './../db/schema';
import {
    getCookie,
    getSignedCookie,
    setCookie,
    setSignedCookie,
    deleteCookie,
} from 'hono/cookie'
import { decode, jwt, verify } from 'hono/jwt'

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

    const email = json.email
    const password = json.password;
    const passwordConfirm = json.passwordConfirm;
    const username = json.username;

    console.log((await db.select().from(user).where(eq(user.email, email))).length);
    console.log((await db.select().from(user).where(eq(user.email, email))));


    let id_count = await db.select({ count: count() }).from(user);

    if (!c.req.header("Content-type") || c.req.header("Content-type") != "application/json")
        return c.json({ message: "Bad " }, 400)
    if (email.length == 0 || password.length == 0 || passwordConfirm.length == 0 || username.length == 0) {
        return c.json({ message: "not found" }, 401)
    }

    if ((await db.select().from(user).where(eq(user.email, email))).length > 0) {

        return c.json({ message: "This email is registered!" }, 401)
    }

    if ((await db.select().from(user).where(eq(user.username, username))).length > 0) {

        return c.json({ message: "This username already used!" }, 401)
    }

    if (password.length < 8) {
        return c.json({ message: "Password must be at least 8 Characters!" }, 401)
    }
    if (password != passwordConfirm) {
        return c.json({ message: "Confirm password is incorrect!" }, 401)
    }
    else {
        await db.insert(user).values(
            {
                username: username,
                email: email,
                password: password
            });
        return c.json({ message: "Sign up Success!" }, 200)
    }

})

app.post('/login', async (c) => {

    const json = await c.req.json();
    const email = json.email;
    const password = json.password;

    const check = await db.select().from(user).where(eq(user.email, email))
    const username = check[0].username;
    const EmailCookie = await setCookie(c, "Username", username);

    const Cookies = getCookie(c)
    console.log({
        all_Cookie: Cookies
    })

    if (check.length == 0) {
        return c.json({ message: "User not found!" }, 401)
    }
    if (check[0].password === password) {
        return c.json({ message: "Login Success!" }, 200)
    } else {
        return c.json({ message: "Login failed!" }, 401)
    }

})

app.post('/logout', async (c) => {
    // deleteCookie(c, 'Username', 'Password')
    deleteCookie(c, "Username")
    console.log(getCookie(c))
    return c.json({ message: "logout success!" }, 200)
})



export default app