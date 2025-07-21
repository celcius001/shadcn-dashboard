import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import type { NextAuthConfig } from 'next-auth';

export default {
  providers: [
    Github,
    Google({
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_typere: 'code',
        },
      },
    }),
  ],
} satisfies NextAuthConfig;
