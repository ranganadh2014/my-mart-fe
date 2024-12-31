import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";

export default function signup(){
    return(
        <Stack spacing={2} className="w-full max-w-xs">
          <TextField name="email" type="email" variant="outlined" label="Email"/>
          <TextField label="Password" type="password" name="password" variant="outlined"/>
          <Button variant="contained">Signup</Button>
          <Link component={NextLink} href="/auth/login" className="self-center">Login</Link>
        </Stack>
    );
}