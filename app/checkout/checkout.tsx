"use client";

import { Button } from "@mui/material";
import createOrder from "./actions/create-order";

interface CheckoutProps {
    prodId: number
}

export default function Checkout({prodId}: CheckoutProps) {
    async function handleCheckout() {
        const order = await createOrder(prodId);
        console.log(order);
    }
    return(
        <>
            <Button 
                variant="contained" 
                className="max-w-[25%]"
                onClick={handleCheckout}
            >
                BuyNow
            </Button>
        </>
    );
}