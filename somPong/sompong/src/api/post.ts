import { text } from 'drizzle-orm/pg-core';
import { Hono } from "hono";
import { Client } from "pg";
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import * as schema from './../db/schema';
import { post, user, postData } from './../db/schema';
import { use } from 'hono/jsx';
import { getCookie } from 'hono/cookie';


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


app.post('/send', async (c) => {
    const json = await c.req.json();
    const title = json.title;
    const text = json.message;


    const [newPost] = await db.insert(post).values({
        username: json.Email
    }).returning();
    console.log("Inserted Post: " + newPost);

    await db.insert(postData).values({
        post_ID: newPost.post_ID,
        title: title,
        text: text
    });
    console.log("Inserted post data.");
    return c.json({ message: "Posted" }, 200)
})

//GET POST
app.get('/getpost', async (c) => {

    //check user
    const curUser = getCookie(c)

    const userPost = await db.select({
        post_ID: post.post_ID,
        username: post.username,
        title: postData.title,
        text: postData.text
    })
    .from(post)
    .leftJoin(postData, eq(post.post_ID, postData.post_ID))
    .where(eq(post.username, curUser.Username))

    // return c.res(userPost)
    return c.json(userPost, 200);
})

export default app