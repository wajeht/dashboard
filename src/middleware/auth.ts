export default defineNuxtRouteMiddleware(async () => {
  const { loggedIn, clear } = useUserSession()
  const config = useRuntimeConfig();

  if (config.adminEmailAddress !== user.email) {
    await clear();
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  if (!loggedIn.value)
    return navigateTo('/')
});
