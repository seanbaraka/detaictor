"use client";
import { PaymentSuccessful } from "@/components/alerts/payment-successful";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { redirect } from "next/navigation";
import { useState } from "react";

export default function Checkout() {
  const [completed, setCompleted] = useState(false);
  // TODO: implement some sort of validation to prevent users from accessing this page without a price/plan
  const queryParams = new URLSearchParams(window.location.search);
  const price = queryParams.get("price");

  return (
    <section className="w-full max-w-screen-lg mx-auto py-12 md:py-20">
      <div className="px-4 md:px-6">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Upgrade to Premium</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-[650px]">
            Take your content moderation to the next level with our premium
            AI-powered detection features. Get advanced filtering, custom rules,
            and detailed analytics to keep your community safe and thriving.
          </p>
        </div>
        <div className="w-full mt-8 border border-gray-100 rounded-lg md:mt-12 items-start flex flex-col md:flex-row gap-4">
          <div className="p-6 md:p-8 border-gray-100">
            <div className="space-y-4 md:pr-12 md:border-r">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">
                  Premium Features
                </h2>
              </div>
              <ul className="grid gap-4">
                <li className="flex items-start gap-3">
                  <div>
                    <h3 className="font-medium">500 credits per month</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Get 500 credits per month to use on our premium features.
                      When you run out, you can purchase more.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div>
                    <h3 className="font-medium">
                      Advanced AI content analysis
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Get detailed insights and analytics on your content
                      moderation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div>
                    <h3 className="font-medium">Priority support</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Get a head of the queue with our premium support team.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {!completed ? (
            <div className="md:w-[45%] w-full p-6 md:pl-0 md:pr-10 md:pt-8">
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">
                    Payment Options
                  </h2>
                </div>
                <div className="">
                  <PayPalScriptProvider
                    options={{
                      clientId:
                        "AZOR62tJaGhQBZs6sDIRnHuVlg-2uZiaCcshm6auP0QUAkL39XvOmhehmsdzV5F_vFBAunUR-SA35at8",
                      currency: "USD",
                      intent: "capture",
                    }}
                  >
                    <PayPalButtons
                      style={{
                        layout: "vertical",
                        color: "black",
                        shape: "rect",
                        label: "pay",
                      }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [
                            {
                              amount: {
                                currency_code: "USD",
                                value: price ?? "49.99",
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={async (data, actions) => {
                        const order = await actions?.order?.capture();
                        console.log("Order", order);
                        const response = await fetch("/api/orders", {
                          method: "post",
                          body: JSON.stringify({
                            details: order?.payer,
                            purchaseUnits: order?.purchase_units,
                          }),
                        });
                        const result = await response.json();
                        setCompleted(true);
                      }}
                    />
                  </PayPalScriptProvider>
                </div>
              </div>
            </div>
          ) : (
            <PaymentSuccessful
              onClose={() => setCompleted(false)}
              isShown={completed}
            />
          )}
        </div>
      </div>
    </section>
  );
}
