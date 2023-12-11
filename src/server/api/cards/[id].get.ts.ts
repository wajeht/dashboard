import type { H3Event } from 'h3'
import db from '../../database/db'

export default defineEventHandler(async (event: H3Event) => {
  await requireUserSession(event)
  const id = getRouterParam(event, 'id')
  const card = await db.card.findFirst(id)

  if (!card) {
    throw createError({
      statusCode: 404,
      statusMessage: 'not found',
    })
  }

  return card;
})
