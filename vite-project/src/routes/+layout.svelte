<script lang="ts">
  import { Toaster, toast } from "svelte-sonner";
  import "./app.css";
  import { Button } from "$lib/components/ui/button";
</script>

<Toaster></Toaster>
<!-- <div class="flex gap-5 justify-center">
  <a href="/login" class="font-bold">Login</a>
  <Button href = "/login" variant="ghost">Login</Button>
  <Button href = "/signup" variant="ghost">Sign up</Button>
  <a href="/signup " class="font-bold">Sign up</a>
</div> -->
<slot />
