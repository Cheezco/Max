import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const hostname = "http://localhost:5000";
        const loginObj = {
          loginName: credentials.username,
          password: credentials.password,
        };
        const response = await fetch(hostname + "/api/login", {
          method: "POST",
          body: JSON.stringify(loginObj),
          headers: { "Content-Type": "application/json" },
        });

        const user = await response.json();
        if (response.status === 200 && user !== undefined && user !== null) {
          return user;
        } else {
          return false;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_JWT_SIGNING_SECRET,
  session: { jwt: true, maxAge: 60 * 59 },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) {
        if (url.includes("/login")) return baseUrl;
        return url;
      } else if (url.startsWith("/")) return new URL(url, baseUrl).toString();
      return baseUrl;
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.token,
          username: user.username,
          userId: user.id,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.userId;
      session.user.accessToken = token.accessToken;
      session.user.username = token.username;
      return session;
    },
  },
});
