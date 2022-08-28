import NextAuth  from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectToDatabase } from '../../../lib/DB/mongoDBConnect';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
            scope: ['profile', 'email']
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter(connectToDatabase()),
})