import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { auth } from '@/services/auth'
import React from 'react'

const Avatar_Shadcn = async () => {

    const user = await auth()

    return (
        <>
            <AvatarImage src={user?.user?.image || ''} />
            <AvatarFallback className='text-3xl text-white bg-[var(--main)] z-10' >{user?.user?.name?.charAt(0).toUpperCase()}{user?.user?.name?.slice(1).charAt(0).toUpperCase()}</AvatarFallback>
        </>
    )
}

export default Avatar_Shadcn