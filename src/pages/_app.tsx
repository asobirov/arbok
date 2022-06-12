import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { SessionProvider } from "next-auth/react";
import PageLayout from '@components/Layout/PageLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </SessionProvider>

  )
}

export default MyApp
