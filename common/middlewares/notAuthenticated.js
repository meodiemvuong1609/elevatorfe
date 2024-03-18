export default async function ({ store, app, redirect, route }) {
  // If the user is not authenticated
  if (!route.path.includes('login') && !route.path.includes('forgot-password') && !route.path.includes('reset-password')) {
    const token = await app.$cookies.get('accessToken')
    if (token) {
      // accept user see page
    } else {
      return redirect(`/login`)
    }
  }
}
