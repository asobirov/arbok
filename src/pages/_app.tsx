import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { SessionProvider } from "next-auth/react";
import PageLayout from '@components/Layout/PageLayout';
import { AppPropsWithLayout } from 'src/common/types';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (
    (page) => (
      <PageLayout>
        {page}
      </PageLayout>
    )
  );
  return (
    <SessionProvider session={pageProps.session}>
      <PageLayout>
        {getLayout(<Component {...pageProps} />)}
      </PageLayout>
    </SessionProvider>

  )
}

export default MyApp
