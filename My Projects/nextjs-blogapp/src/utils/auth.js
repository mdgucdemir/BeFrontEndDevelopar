import { PrismaAdapter } from "@auth/prisma-adapter";
// import { Prisma } from "@prisma/client";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      // authorization: {
      //   // google hesabi otomatik olarak gormek istemiyorsan
      //   // yani her seferinde manuel giris yapmak istiyorsan kullan
      //   params: {
      //     prompt: "select_account",
      //   },
      // },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // ...add more providers here
  ],
};
