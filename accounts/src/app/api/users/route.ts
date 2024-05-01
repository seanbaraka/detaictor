import { User, createOrUpdateUser } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request, _response: NextResponse) {
  const { email } = (await request.json()) as User;
  if (!email) {
    return new Response("Email is required", { status: 400 });
  }
  const userId = await createOrUpdateUser({ email });
  return NextResponse.json(userId);
}
