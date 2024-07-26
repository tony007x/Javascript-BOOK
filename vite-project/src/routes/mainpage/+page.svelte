<script lang="ts">
    import { onMount } from "svelte";
    import Nav from "./(component)/nav.svelte";
    import Wretch from "wretch";
    import { Button } from "$lib/components/ui/button";
    import { toast } from "svelte-sonner";
    import * as Resizable from "$lib/components/ui/resizable/index.js";
    import { Textarea } from "$lib/components/ui/textarea";
    import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";

    let Email: String;
    let message: any;
    let submit = false;
    const send = ()=>{
        // console.log(message)
        submit = true;
        console.log(submit)

    }
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
<div class="flex w-full h-screen mt-[100px]">
    <Resizable.PaneGroup direction="horizontal">
        <Resizable.Pane defaultSize={75} class=" flex border-r">
            <ScrollArea class="w-full h-screen border border-[red] p-4">
                <span>
                    {submit === true ? message : ""}
                </span>
            </ScrollArea>
        </Resizable.Pane>
        <!-- <Resizable.Handle /> -->
        <Resizable.Pane
            defaultSize={25}
            class=" flex border border-[red] sticky bottom-0 "
        >
            <div class="grid w-full gap-2 m-3">
                <Textarea
                    placeholder="Type your message here."
                    bind:value={message}
                />
                <Button on:click={send}>Send message</Button>
            </div>
        </Resizable.Pane>
    </Resizable.PaneGroup>
</div>
