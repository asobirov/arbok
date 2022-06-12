import type { NextPage } from 'next'

import { useRouter } from 'next/router';

import PageLayout from '@components/Layout/PageLayout'
import { signOut, useSession } from 'next-auth/react'
import Button from '@components/Buttons/Button';

const Home: NextPage = () => {
  const router = useRouter();

  const { data } = useSession({
    required: true, onUnauthenticated: () => {
      router.push('/auth');
    }
  })
  return (
    <Button
      onClick={() => signOut()}
    >
      Sign out
    </Button>
  )
}

export default Home
