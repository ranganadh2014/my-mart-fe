"use client";

import { Button, Stack, TextField, Link } from "@mui/material";
import NextLink from "next/link";
import { useActionState } from "react";
import login from "./login";

export default function Login() {
    const [state, formAction, isPending] = useActionState(login, {error: ""})
    return (
        <form action={formAction} className="max-w-xs w-full">
            <Stack spacing={2}>
                <TextField 
                    error={!!state.error} 
                    helperText={state.error} 
                    name="email" 
                    label="Email" 
                    variant="outlined" 
                    type="email"
                    />
                <TextField 
                    error={!!state.error} 
                    helperText={state.error} 
                    name="password" 
                    label="Password" 
                    variant="outlined" 
                    type="password"
                    />
                <Button disabled={isPending} type="submit" variant="contained">Login</Button>
                <Link className="self-center" component={NextLink} href="/auth/signup">Signup</Link>
            </Stack>
        </form>

    );
}