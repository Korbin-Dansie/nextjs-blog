import { UnitOfWork } from "@/data/UnitOfWork";
import { comparePassword } from "@/services/encryption";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      id: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const unitOfWork = new UnitOfWork();
        const dbUser = await unitOfWork.users().getByEmail(credentials!.email);

        if (dbUser) {
          let passwordsMatch = await comparePassword(credentials!.password, dbUser.hashedPassword);

          if(passwordsMatch == false){
            return null;
          }
          // Any object returned will be saved in `user` property of the JWT
          const user = {
            id: dbUser.id,
            firstName: dbUser.firstName,
            lastName: dbUser.lastName,
            email: dbUser.email,
          };

          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      /* Step 1: update the token based on the user object */
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token.user;
      return session;
    },
  },
    pages: {
      signIn: '/account/signin',
      // signOut: '/account/signout',
      // error: '/account/error', // Error code passed in query string as ?error=
      // verifyRequest: '/account/verify-request', // (used for check email message)
      newUser: '/account/register' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
};
export default NextAuth(authOptions);
