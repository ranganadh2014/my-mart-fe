"use server";
import { post } from "@/app/common/util/fetch";

interface PaymentInfo {
    orderId: string,
    razorpayPaymentId: string,
    razorpaySignature: string,
}

export default async function verifyOrder(data: PaymentInfo) {
    return await post('checkout/payment', data);
}