/* eslint-disable vars-on-top */
/* eslint-disable node/prefer-global/process */
import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma
	= globalThis.prisma
	|| new PrismaClient({
	  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
	});

if (process.env.NODE_ENV !== 'production')
  globalThis.prisma = prisma;

export default prisma;
