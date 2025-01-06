"use server";
import { get } from "../../../common/util/fetch";
import { IProduct } from "@/app/products/interfaces/product.interface";

export default async function getProduct(prodId: number) {
    return await get<IProduct>(`products/${prodId}`);
}