<script lang="ts">
    import { Label } from "$lib/components/ui/label";
    import { onMount } from "svelte";
    import Wretch from "wretch";

    let title: string;
    let text: string;
    export let post: PostData[] = [];

    interface PostData {
        post_ID: number;
        title: string;
        text: string;
    }

    onMount(() => {
        Wretch("/api/post/getpost")
            .get()
            .json((json) => {
                post = json;
            });
    });
</script>

<!-- <div class="flex-col w-full border m-5 p-5 rounded-xl bg-[#FFFDD0]">
    <Label class="flex w-full border-b border-[red] p-5"></Label>

        <ul>
            {#each post as post}
              <li>{post.text}</li>
            {/each}
          </ul>
</div> -->

{#each post as post}
    <div class="flex-col w-full border p-5 rounded-xl bg-[#ffffff] shadow-xl">
        <Label class="flex  border-b border-[#646464] font-bold p-2">
            {post.title}
        </Label>
        <p class="p-2">
            {post.text}
        </p>
    </div>
{/each}
