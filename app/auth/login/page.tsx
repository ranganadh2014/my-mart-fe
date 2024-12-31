import { Button, Stack, TextField, Link } from "@mui/material";
import NextLink from "next/link";

export default function Login() {
    return (
        <Stack spacing={2} className="max-w-xs w-full">
            <TextField name="login" label="Email" variant="outlined" type="email"/>
            <TextField name="signup" label="Password" variant="outlined" type="password"/>
            <Button variant="contained">Login</Button>
            <Link className="self-center" component={NextLink} href="/auth/signup">Signup</Link>
        </Stack>
    );
}