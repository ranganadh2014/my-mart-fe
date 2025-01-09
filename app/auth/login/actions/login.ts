"use server";
import { FormError } from "@/app/common/interfaces/form-error.interface";
import { redirect } from "next/navigation";
import { API_URL } from "@/app/common/constants/api";
import { getErrorMessage } from "@/app/common/util/errors";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export default async function login (
    _prevState: FormError,
    formData: FormData,
) {
    // make the fetch call to backend
    const remoteUrl = `${API_URL}/auth/login`;
    const res = await fetch(remoteUrl, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(Object.fromEntries(formData)),
    });
    if(!res.ok) {
        return {error: getErrorMessage(await res.json())}
    }
    //get cookie from response header
    const cookieHeader = res.headers.get("Set-Cookie");
    //extract jwt token
    if(cookieHeader) {
        const jwtToken = cookieHeader.split(";")[0].split("=")[1];
        const cookieStore = await cookies();
        cookieStore.set({
            name: "Authentication",
            value: jwtToken,
            secure: true,
            httpOnly: true, 
            expires: new Date(jwtDecode(jwtToken).exp!*1000),
        });
    }

    redirect("/");
}