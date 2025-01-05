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

  const response = await fetch(`${API_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(await getHeaders()) },
    body: JSON.stringify(body),
  });
  const parsedResponse = await response.json();
  if (!response.ok) {
    return { error: getErrorMessage(parsedResponse) };
  }
  return { error: "", data: parsedResponse };
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