import type { NextPageWithLayout } from '@common/types';

import { useRouter } from 'next/router';

import { signOut, useSession } from 'next-auth/react'
import Button from '@components/Buttons/Button';
import { ChatSidebar } from '@components/Chat/ChatSidebar';

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  const { data, status } = useSession({
    required: true, onUnauthenticated: () => {
      router.push('/auth');
    }
  })

  if (status === 'loading' || data === null) {
    return <div>Loading...</div>
  }

  return (
    <div className='min-h-screen'>
      <ChatSidebar />
    </div>
  )
}

Home.getLayout = (page) => page;

export default Home
