import { API_URL } from "../constants/api";
import { getErrorMessage } from "./errors"
import { cookies } from "next/headers";


const getHeaders = async () => {
  const cookieStore = await cookies();
  return { Cookie: cookieStore.toString() };
};

// POST request
export const post = async (path: string, data: FormData | object) => {
  const body = data instanceof FormData ? Object.fromEntries(data) : data;
  // Making calls to Backend Service
  const response = await fetch(`${API_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(await getHeaders()) },
    body: JSON.stringify(body),
  });
  // Get the JSON response
  const parsedResponse = await response.json();
  // Extract error message if response is not OK
  if (!response.ok) {
    return { error: getErrorMessage(parsedResponse) };
  }
  return { error: "", data: parsedResponse };
};


// GET request supporting multiple return types
export const get = async <T> (path: string) => {
  const response = await fetch(`${API_URL}/${path}`, {
    headers: await getHeaders(),
  });
  return await response.json() as T;
};