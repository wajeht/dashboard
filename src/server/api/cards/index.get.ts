import { H3Event } from 'h3'
import db from '../../database/db';

export default defineEventHandler(async (event: H3Event) => {
  return await db.card.findMany()
})
