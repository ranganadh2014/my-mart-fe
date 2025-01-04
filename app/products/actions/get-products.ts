"use server";
import { get } from "../../common/util/fetch";
import { IProduct } from "@/app/common/interfaces/product.interface";

export default async function getProducts() {
    return await get<IProduct[]>("products");
}