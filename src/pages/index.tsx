import type { NextPageWithLayout } from '@common/types';

import { useRouter } from 'next/router';

import { useSession } from 'next-auth/react'
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
    <div className='flex flex-row min-h-screen'>
      <ChatSidebar />
    </div>
  )
}

Home.getLayout = (page) => page;

export default Home
