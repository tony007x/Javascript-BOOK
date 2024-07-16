<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";

    let email: string;
    let password1: string;
    let password2: string;

    const showAlert = () => {
        alert(email);
        alert(password1);
    };
</script>

<div
    class="flex w-full h-screen border border-[#ffeb3a] justify-center items-center"
>
    <!-- box -->
    <div class="flex-col w-[400px] h-[600px] border p-5">
        <div class="flex border border-[red] justify-center">
            <h1 class="text-[36px] font-bold">Sign UP</h1>
        </div>

        <div class="grid gap-5 mt-5 mb-5">
            <Input 
                type="email"
                bind:value="{email}" 
                placeholder="Email" 
                id="email" 
            />

            <Input
                type="password"
                bind:value="{password1}" 
                placeholder="Password"
                id="password1"
            />
            <Input
                type="password"
                bind:value="{password2}" 
                placeholder="Confirm password"
                id="password2"
            />
        </div>

        <div class="flex w-full border border-[red]">
            <Button on:click={showAlert} class="w-full">Sign Up</Button>
        </div>
    </div>
</div>
