"use client";

import { Button } from "@mui/material";
import createOrder from "./actions/create-order";

function loadScript() {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      // load the script
      script.onload = () => {
        resolve(true)
      }
      // error handling
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

interface CheckoutProps {
    prodId: number
}

export default function Checkout({prodId}: CheckoutProps) {
    
    async function handleCheckout() {
        const order = await createOrder(prodId);
        const orderConfig = order.data;
        console.log(orderConfig);

        // 1. Load razorpay scripts
        await loadScript();

        // 2. create new order object that will be send to payment gateway
        const finalOrderObject = {
          "key": process.env.NEXT_PUBLIC_RAZOR_PAY_KEY_ID, // Enter the Key ID generated from the Dashboard
          "amount": orderConfig.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          "currency": orderConfig.currency,
          "name": "My Mart",
          "description": "Test Transaction",
          "order_id": orderConfig.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          "handler": function (response) {
            alert(`Payment Successful: ${response.razorpay_payment_id}`);
          },
          "prefill": {
            "name": "Test",
            "email": "Test@gmail.com",
            "contact": "9000090000"
          },
        };

        // 3. create the instance of Razorpay
        const razorpay = new Razorpay(finalOrderObject);

        // 4. error handling
        razorpay.on('payment.failed', function (response) {
            alert(`Payment Failed: ${response.error.description}`);
          });   
        // 5. open the checkout form of razorpay
        razorpay.open();
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