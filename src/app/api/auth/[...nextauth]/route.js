import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect()
        try {
          const user = await User.findOne({ email: credentials.email })

          if (user) {
            // check password
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
            if (isPasswordCorrect) {
              return user
            } else {
              throw new Error("Wrong password")
            }
          } else {
            throw new Error("User not found")
          }
        } catch (error) {
          throw new Error(error)
        }
      }
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 3 * 24 * 60 * 60,
  },
});

export { handler as GET, handler as POST };
