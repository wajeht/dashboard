export default oauth.googleEventHandler({
  config: {
    emailRequired: true
  },
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: {
        google: user,
      },
      loggedInAt: Date.now()
    })

    return sendRedirect(event, '/')
  },
  onError(event, error) {
    console.error('GitHub OAuth error:', error)
    return sendRedirect(event, '/')
  },
})
