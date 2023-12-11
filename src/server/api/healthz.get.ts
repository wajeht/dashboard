export default defineEventHandler(async (event) => {
  return {
    message: 'ok',
    date: new Date(),
  };
})
