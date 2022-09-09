import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
   
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
      })
    // ...add more providers here
  ],
  callbacks: {
    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
},
pages: {
  signIn: '/login',
  signOut: '/logout',
  error: '/error', // Error code passed in query string as ?error=
  verifyRequest: '/verify-request', // (used for check email message)
  newUser: '/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
}
});