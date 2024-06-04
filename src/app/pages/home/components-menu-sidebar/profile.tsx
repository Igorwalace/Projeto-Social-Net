import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { auth } from '@/services/auth'
import React from 'react'

const Profile = async () => {

    const user = await auth()
    
    return (
        <div className="flex items-center gap-3" >
            <Avatar className="w-6 h-6">
                <AvatarImage src={user?.user?.image || ''} />
            </Avatar>
            <div className="font-medium">
                <h1>Profile</h1>
            </div>
        </div >
    )
}

export default Profile