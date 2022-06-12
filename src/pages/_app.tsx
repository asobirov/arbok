import '../styles/globals.css'
import type { ReactElement } from 'react';
import type { AppPropsWithLayout, GetLayout } from '@common/types';

import { SessionProvider } from "next-auth/react";
import PageLayout from '@components/Layout/PageLayout';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout: GetLayout = (
    Component.getLayout === null
      ? (page) => page
      : Component.getLayout
  ) || ((page) => (<PageLayout>{page}</PageLayout>));

  return (
    <SessionProvider session={pageProps.session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>

  )
}

export default MyApp
