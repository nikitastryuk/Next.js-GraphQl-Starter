import { PrismaClient } from '@prisma/client';

import prisma from '../prisma';

export type Context = {
  prisma: PrismaClient;
};

// TODO: Types
export async function createContext({ req, res }: any): Promise<Context> {
  return {
    prisma,
  };
}
