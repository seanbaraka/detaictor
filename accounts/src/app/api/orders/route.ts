// import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("Order Completed");
  const body = await req.json();
  console.log(body);
  // paypal order creation
  return NextResponse.json({
    client: "paypal order creation",
    status: "success",
  });
}
