import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react'

import Button from '@components/Buttons/Button'

const Auth: NextPage = () => {
    const router = useRouter();
    const { data, status } = useSession({ required: false });

    if (status === 'authenticated') {
        router.push('/');
    }

    const handleSignIn = () => {
        signIn('github');
    }

    return (
        <div className="flex h-full justify-center items-center">

            <Button onClick={() => handleSignIn()}>
                Sign in with GitHub
            </Button>
        </div>
    )
}

export default Auth;
