import { auth } from '@/services/auth'
import React from 'react'

//shadcn
import { Avatar, AvatarImage } from '@/components/ui/avatar'

const Messages_Single = async () => {

    const user = await auth()

    return (
        <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
                <AvatarImage src={user?.user?.image || ''} />
            </Avatar>
            <div className="flex-1">
                <div className="font-medium">Shu Ding</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    I have some ideas for the new design system.
                </div>
            </div>
        </div>
    )
}

export default Messages_Single