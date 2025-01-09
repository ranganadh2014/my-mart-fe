"use client";

import { Button } from "@mui/material";
import createOrder from "./actions/create-order";
import verifyOrder from "./actions/verify-order";

// This function adds Razor pay provided module to script tag
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
        // Request new order to backend, which provides order ID
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
          // This handler will be called once the payment is successful
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          "handler": async function (response: any) {
            console.log(response);
            // verify payment
            const result = await verifyOrder({
              orderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            });
            console.log(result);
            if (result.error === "") {
              alert("Payment successful");
            } else {
              alert("Payment failed");
            }
          },
          "prefill": {
            "name": "Test",
            "email": "Test@gmail.com",
            "contact": "9000090000"
          },
        };

        // 3. create the instance of Razorpay
        // @ts-expect-error Razorpay types not available 
        const razorpay = new Razorpay(finalOrderObject);

        // 4. error handling
        // Register for payment failure error
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        razorpay.on('payment.failed', function (response: any) {
            //TODO: Update the backend about payment failure
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