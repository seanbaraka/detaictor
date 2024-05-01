import { getUser } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } },
) {
  const { userId } = params;
  if (!userId) {
    return new Response("User ID is required", { status: 400 });
  }
  const user = await getUser(userId);
  return NextResponse.json(user);
}
