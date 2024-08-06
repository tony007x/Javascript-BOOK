<script lang="ts">
    import { onMount } from "svelte";
    import Nav from "./(component)/nav.svelte";
    import { Input } from "$lib/components/ui/input";
    import Wretch from "wretch";
    import { Button } from "$lib/components/ui/button";
    import { toast } from "svelte-sonner";
    import * as Resizable from "$lib/components/ui/resizable/index.js";
    import { Textarea } from "$lib/components/ui/textarea";
    import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
    import { AspectRatio } from "$lib/components/ui/aspect-ratio/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import Post from "./(component)/post.svelte";

    let Email: String;

    let title: string;
    let message: string;
    const send = async () => {
        await Wretch("/api/post/send")
            .json({
                Email,
                title,
                message,
            })
            .post();
    };
    const getCookies = () => {
        const cookies = Object.fromEntries(
            document.cookie.split("; ").map((cookie) => cookie.split("=")),
        );
        return cookies;
    };
    onMount(() => {
        Email = getCookies().Username;
        if (Email == null) {
            window.location.pathname = "/login";
        }
    });
</script>

<div class="flex w-full h-screen mt-[100px] justify-center items-center snap-x">
    <Nav></Nav>
    <div class="flex w-screen min-h-full bg-[#262626]">
        <div class="flex w-full bg-[#FFFDD0]">
            <div class="border border-[red] w-full m-40">
                <h1 class="font-extrabold text-8xl text-[#262626]">
                    Fullstack Developer
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Velit nostrum, at beatae blanditiis deleniti aliquid. Ex
                    inventore asperiores totam temporibus, ad quidem maxime
                    vero, optio nisi consectetur alias voluptatem cum.
                </p>
            </div>
        </div>
        <div class="flex w-1/2 justify-center bg-[#FF7F11]">
            <div class="flex relative w-[400px] h-[400px] z-0 mt-10">
                <img
                    class="object-cover w-full rounded-2xl shadow-md"
                    src="https://github.com/tony007x/Python_Beginner/blob/main/IMG_0373.JPG?raw=true"
                    alt="ME"
                />
                <figure
                    class=" absolute w-[400px] h-[400px] ml-5 mt-5 z-[-1] border-2 rounded-2xl"
                ></figure>
            </div>
        </div>
    </div>
</div>

<div class="flex w-full h-[400px] bg-[#262626]">
    <div class="grid w-1/2 border border-[red] m-5 p-5 gap-5">
        <Input type="text" placeholder="Title" bind:value={title} />
        <Textarea placeholder="Type your message here." bind:value={message} />

        <Button on:click={send}>Send message</Button>
    </div>
   
</div>
<div class="flex w-full h-full bg-[#FFFDD0]">
    <div class="grid grid-cols-4 gap-5 p-5 border border-[red] w-full">
        <Post/>
    </div>
</div>
