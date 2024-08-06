<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Bolt } from "lucide-svelte";
    import { onMount } from "svelte";
    import Wretch from "wretch";
    import * as Avatar from "$lib/components/ui/avatar/index.js";

    let username: string;
    const logOut = async () => {
        await Wretch("/api/user/logout")
            .post()
            .res(async (e) => {
                window.location.pathname = "/login";
            });
    };
    const getCookies = () => {
        const cookies = Object.fromEntries(
            document.cookie.split("; ").map((cookie) => cookie.split("=")),
        );
        return cookies;
    };
    onMount(() => {
        username = getCookies().Username;
    });
</script>

<div class="flex fixed top-0 w-full bg-[#262626] h-[100px] shadow-md z-10">
    <div class=" flex w-full justify-between items-center m-12">
        <Bolt size="54px" color="white" />
        <div class="flex-col">
            <div class="flex gap-3">

                <Avatar.Root>
                    <Avatar.Image
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                    />
                    <Avatar.Fallback>CN</Avatar.Fallback>
                </Avatar.Root>
                <h1
                    class=" flex w-full justify-center items-center font-extrabold text-4xl text-slate-50"
                >
                    {username}
                </h1>
            </div>

            <Button
                on:click={logOut}
                variant="link"
                class="flex w-full justify-centertext-slate-5 text-slate-100"
            >
                LOG OUT</Button
            >
        </div>
    </div>
</div>
