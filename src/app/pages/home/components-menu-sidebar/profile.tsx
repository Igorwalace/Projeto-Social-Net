import { auth } from '@/services/auth'
import Link from 'next/link'
import React from 'react'

//shadcn
import { Avatar, AvatarImage } from '@/components/ui/avatar'

const Profile = async () => {

    const user = await auth()
    
    return (
        <Link href='/pages/profile' className="flex items-center gap-3" >
            <Avatar className="w-6 h-6">
                <AvatarImage src={user?.user?.image || ''} />
            </Avatar>
            <div className="font-medium">
                <h1>Profile</h1>
            </div>
        </Link >
    )
}

export default Profile