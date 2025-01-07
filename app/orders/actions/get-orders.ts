"use server";

import { get } from "@/app/common/util/fetch";
import { IOrder } from "../interfaces/order.interface";

export default async function getOrders() {
    return await get<IOrder[]>("orders");
}