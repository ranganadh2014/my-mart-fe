"use server";
import { post } from "@/app/common/util/fetch";

export default async function createOrder(prodId: string) {
    return await post('checkout/order', {prodId});
}