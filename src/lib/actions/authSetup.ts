import NextAuth from 'next-auth';
import authConfig from '@/lib/actions/auth.config';

export const { auth, handlers, signIn, signOut } = NextAuth({ ...authConfig });
