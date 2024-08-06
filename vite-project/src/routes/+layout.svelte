<script lang="ts">
  import { Toaster, toast } from "svelte-sonner";
  import "./app.css";
  import { Button } from "$lib/components/ui/button";
</script>

<Toaster></Toaster>
<style lang="postcss">
  :global(body) {
    /* @apply bg-[#262626]; */
  }
</style>
<slot />
