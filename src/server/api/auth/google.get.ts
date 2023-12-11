export default oauth.googleEventHandler({
  async onSuccess(event, { user }) {
    const config = useRuntimeConfig(event);

    if (config.adminEmailAddress !== user.email)  {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized'
      })
    }
    await setUserSession(event, { user: { google: user } })
    return sendRedirect(event, '/')
  }
})
