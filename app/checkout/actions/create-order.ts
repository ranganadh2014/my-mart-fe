"use server";
import { post } from "@/app/common/util/fetch";

export default async function createOrder(prodId: number) {
    return await post('checkout/order', {prodId});
}