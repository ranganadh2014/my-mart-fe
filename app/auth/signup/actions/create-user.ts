"use server";

import { redirect } from "next/navigation";
import { FormError } from "@/app/common/interfaces/form-error.interface";
import { post } from "@/app/common/util/fetch";

export default async function createUser(
  _prevState: FormError,
  formData: FormData
) {
  // Make a post call to backend to create new user
  const { error } = await post("users", formData);
  if (error) {
    return { error };
  }
  redirect("/");
}