import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import prismadb from "@/lib/prismadb";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import NextAuth from "next-auth/next";

 const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prismadb),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            id: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'text'
                }
            },
            async authorize(credentials: any) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid Credentials');
                }

                const user = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user || !user?.hashedPassword) {
                    throw new Error('Invalid credentials');
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )

                if (!isCorrectPassword) {
                    throw new Error('Invalid Credentials');
                }

                return user;
            }
        })
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);
// console.log(authOptions.adapter?.getUser);

export { handler as GET , handler as POST, authOptions};