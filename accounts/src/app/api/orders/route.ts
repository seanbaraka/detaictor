// import { NextRequest } from "next/server";
import {
  createOrUpdateUser,
  createOrder,
  getUser,
  updateUserCredit,
} from "@/lib/prisma";
import { NextResponse } from "next/server";

type Order = {
  details: OrderDetails;
  purchaseUnits: Array<{
    amount: { currency: string; value: string };
    payee: { email_address: string; merchant_id: string };
  }>;
};

type OrderDetails = {
  name: { given_name: string; surname: string };
  email_address: string;
  payer_id: string;
  address: { country_code: string };
};

export async function POST(req: Request) {
  console.log("Order Completed");
  const order = await req.json();
  console.log(order);
  const { details, purchaseUnits } = order as Order;
  const userId = await createOrUpdateUser({ email: details.email_address });
  const newOrder = await createOrder({
    userId: userId.id,
    amount: purchaseUnits[0].amount.value,
  });
  if (newOrder) {
    // update the users credit balance
    const update = await updateUserCredit(userId.id, 500);
    if (update) {
      console.log("updated user balance successfully");
    }
  }
  // paypal order creation
  return NextResponse.json({
    client: "Order recorded and account updated successfully",
    status: "success",
  });
}
