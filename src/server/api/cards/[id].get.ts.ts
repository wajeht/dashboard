import type { H3Event } from 'h3'
import db from '../../database/db'

export default defineEventHandler(async (event: H3Event) => {
  const id = getRouterParam(event, 'id')
  try {
    const card = await db.card.findFirst(id)
    console.log(card)
  }
  catch (error) {
    console.log('xxxxx')
    throw await createError({
      statusCode: 404,
      statusMessage: 'not found',
    })
  }
})
