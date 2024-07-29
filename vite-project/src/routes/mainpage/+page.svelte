<script lang="ts">
    import { onMount } from "svelte";
    import Nav from "./(component)/nav.svelte";
    import Wretch from "wretch";
    import { Button } from "$lib/components/ui/button";
    import { toast } from "svelte-sonner";
    import * as Resizable from "$lib/components/ui/resizable/index.js";
    import { Textarea } from "$lib/components/ui/textarea";
    import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
    import { AspectRatio } from "$lib/components/ui/aspect-ratio/index.js";
    import { Label } from "$lib/components/ui/label/index.js";


    let Email: String;
    let message: any;
    let submit = false;
    const send = () => {
        // console.log(message)
        submit = true;
        console.log(submit);
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

<Nav></Nav>

<div class="flex w-full h-screen mt-[100px] justify-center items-center">
    <div class="flex w-screen h-[700px] border border-[red]">
        <div class="flex w-full border border-[blue] m-3">

        </div>
        <div class="flex w-1/3 border border-[green] m-3">
        </div>
    </div>
</div>

<div class="flex w-full h-[400px] bg-black">
    helloWolrd
</div>
<img src="https://github.com/tony007x/Javascript-BOOK/blob/main/IMG_0373.JPG?raw=true" alt="ME">

