"use client";

import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import { useActionState } from "react";
import createUser from "./create-user";



export default function Signup(){
    const [state, formAction, isPending] = useActionState(createUser, {error: ""});
    return(
      <form action={formAction} className="w-full max-w-xs">
        <Stack spacing={2} >
          <TextField helperText={state.error} error={!!state.error} label="Email" type="email" name="email"  variant="outlined" />
          <TextField helperText={state.error} error={!!state.error} label="Password" type="password" name="password" variant="outlined"/>
          <Button type="submit" variant="contained" disabled={isPending}>Signup</Button>
          <Link component={NextLink} href="/auth/login" className="self-center">Login</Link>
        </Stack>
      </form>
    );
}