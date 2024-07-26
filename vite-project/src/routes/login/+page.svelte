<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import Wretch from "wretch";
    import { toast } from "svelte-sonner";


    let email: string;
    let password: string;



    const login = async () => {

        await Wretch("/api/user/login")
            .json({
                email,
                password
            })
            .headers({
                email: email,
                password: password
            })
            .post()
            .badRequest(async(e)=>{
                console.log("badReq");
                toast.error(JSON.parse(e.message).message);
            })
            .unauthorized(async(e)=>{
                console.log("unauth");
                toast.error(JSON.parse(e.message).message);
            })
            .res(async (e)=>{
                console.log("res"+e)
                window.location.pathname = '/mainpage'
            });
        
    };

    
</script>

<div
    class="flex w-full h-screen border border-[#ff0000] justify-center items-center"
>
    <!-- box -->
    <div class="flex-col w-[400px] h-fit border p-10 rounded-[10px] shadow-xl">
        <div class="flex justify-center">
            <h1 class="text-[36px] font-semibold">Log in</h1>
        </div>

        <div class="grid gap-5 mt-5 mb-5">

            Email
            <Input
                type="email"
                bind:value={email}
                placeholder="Email"
                id="email"
            />
            Password
            <Input
                type="password"
                bind:value={password}
                placeholder="Password"
                id="password1"
            />

        </div>

        <div class="flex w-full">
            <Button on:click={login} class="w-full">Sign Up</Button>
        </div>
    </div>
</div>
