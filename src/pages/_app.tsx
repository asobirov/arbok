import superjson from "superjson";

import { SessionProvider } from "next-auth/react";
import { withTRPC } from '@trpc/next';

import type { AppRouter } from '@server';
import type { AppType } from 'next/dist/shared/lib/utils';

import '../styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/trpc` : `http://localhost:${process.env.PORT ?? 3000}/api/trpc`;

    return {
      url,
      transformer: superjson
    }
  },
  ssr: false,
})(MyApp);
