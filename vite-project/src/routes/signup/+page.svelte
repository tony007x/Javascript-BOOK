<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import Wretch from "wretch";
    import { toast } from "svelte-sonner";

    let username: string;
    let email: string;
    let password: string;
    let passwordConfirm: string;
    let error :string;

    const login = async () => {

        
        await Wretch("/api/user/signup")
            .json({
                username,
                email,
                password,
                passwordConfirm,
            })
            .headers({
                email: email,
                username: username
            })
            .post({
                username,
                email,
                password,
                passwordConfirm,
            })
            .badRequest(async(e)=>{
                error = JSON.parse(e.message).message;
                toast.error(JSON.parse(e.message).message);
            })
            .unauthorized(async(e)=>{
                console.log(e.message);
                error = JSON.parse(e.message).message;
                toast.error(JSON.parse(e.message).message);
            })
            .res(async (e)=>{
                console.log(Array.from(e.headers.entries()))
                window.location.pathname = '/login'
            });
        
    };

    
</script>

<div
    class="flex w-full h-screen border border-[#ff0000] justify-center items-center"
>
    <!-- box -->
    <div class="flex-col w-[400px] h-fit border p-10 rounded-[10px] shadow-xl">
        <div class="flex justify-center">
            <h1 class="text-[36px] font-semibold">Sign Up</h1>
        </div>
        <!-- Error respone -->
        <div class="w-full border border-[red] ">
            <p>{error}</p>
        </div>
        <div class="grid gap-5 mt-5 mb-5">
            Username
            <Input
                type="text"
                bind:value={username}
                placeholder="Username"
                id="username"
            />
            Email
            <Input
                type="email"
                bind:value={email}
                placeholder="Email"
                id="email"
                required
                pattern=".+@example\.com"
            />
            Password
            <Input
                type="password"
                bind:value={password}
                placeholder="Password"
                id="password1"
            />
            Confirm Password
            <Input
                type="password"
                bind:value={passwordConfirm}
                placeholder="Confirm password"
                id="password2"
            />
        </div>

        <div class="flex w-full">
            <Button on:click={login} class="w-full">Sign Up</Button>
        </div>
    </div>
</div>
