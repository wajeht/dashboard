import type { H3Event } from 'h3';
import db from '../../database/db';

export default defineEventHandler(async (event: H3Event) => {
  await requireUserSession(event);
  return await db.card.findMany();
})
