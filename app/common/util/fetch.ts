import { API_URL } from "../constants/api";
import { getErrorMessage } from "./errors"
import { cookies } from "next/headers";

// POST request
export const post = async (path: string, formData: FormData) => {
  const response = await fetch(`${API_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const parsedResponse = await response.json();
  if (!response.ok) {
    return { error: getErrorMessage(parsedResponse) };
  }
  return { error: "" };
};

const getHeaders = async () => {
  const cookieStore = await cookies();
  return { Cookie: cookieStore.toString() };
};

// GET request
export const get = async <T> (path: string) => {
  const response = await fetch(`${API_URL}/${path}`, {
    headers: await getHeaders(),
  });

  // if (!response.ok) {
  //   const parsedResponse = await response.json();
  //   return { error: getErrorMessage(parsedResponse) };
  // }

  return await response.json() as T;
};