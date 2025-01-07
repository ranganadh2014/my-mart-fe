export interface IOrder {
    id: number,
    rpOrderId: string,
    rpPaymentId?: string,
    userId: number,
    productId: number,
    amount: number,
    createdAt: string,
    product: {
        name: string,
    },
}