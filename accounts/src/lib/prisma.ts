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
