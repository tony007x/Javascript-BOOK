<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import Wretch from "wretch";

    let email: string;
    let password: string;
    let passwordConfirm: string;

    const login = async () => {
        console.log(email);
        console.log(password);
        console.log(passwordConfirm);
        await Wretch("/api/user/signup")
            .json({
                email,
                password,
            })
            .post();
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
