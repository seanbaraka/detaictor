import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export type User = {
  email: string;
};

export async function createOrUpdateUser(user: User) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });
  if (existingUser) {
    return { id: existingUser.id };
  } else {
    const newUser = await prisma.user.create({
      data: {
        email: user.email,
      },
    });
    return { id: newUser.id };
  }
}

export async function getUser(userId: string) {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
}

export async function updateUserCredit(userId: string, amount: number) {
  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      creditsBalance: { increment: amount },
    },
  });
}

export async function createOrder(order: any) {
  return await prisma.order.create({
    data: {
      userId: order.userId,
      amount: order.amount,
    },
  });
}
