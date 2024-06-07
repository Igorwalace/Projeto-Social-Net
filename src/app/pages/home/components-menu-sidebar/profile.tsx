import { auth } from '@/services/auth'
import Link from 'next/link'
import React from 'react'

//shadcn
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const Profile = async () => {

    const user = await auth()
    
    return (
        <Link href={`/pages/profile/${user?.user?.id}`} className="flex items-center gap-3" >
            <Avatar className="w-6 h-6">
                <AvatarImage src={user?.user?.image || ''} />
                <AvatarFallback className='text-3xl text-white bg-[var(--main)] z-10' >{user?.user?.name?.charAt(0).toUpperCase()}{user?.user?.name?.slice(1).charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="font-medium">
                <h1>Profile</h1>
            </div>
        </Link >
    )
}

export default Profile