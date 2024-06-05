import { AvatarImage } from '@/components/ui/avatar'
import { auth } from '@/services/auth'
import React from 'react'

const Avatar_Shadcn = async () => {

    const user = await auth()

    return (
        <AvatarImage className="" src={user?.user?.image || ''} />
    )
}

export default Avatar_Shadcn