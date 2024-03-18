export default async function ({ _store, app, redirect, route }) {
  // If the user is not authenticated
  let token = await app.$cookies.get('accessToken')
  // List of routes that should be accessible without authentication
  const allowedRoutes = ['/login', '/public', '/other_allowed_route']

  if (!token && !allowedRoutes.includes(route.path)) {
    // Redirect to the login page only if not on an allowed route
    return redirect(`login`)
  }
}
