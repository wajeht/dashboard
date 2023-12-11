export default oauth.googleEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, { user: { google: user } });
    return sendRedirect(event, '/');
  },
});
