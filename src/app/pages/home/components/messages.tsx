import React from 'react'
import { auth } from '@/services/auth'

//shadcn
import { Avatar, AvatarImage } from '@/components/ui/avatar'

const Messages = async () => {

    const user = await auth()

    return (
        <aside className="fixed top-[92px] right-5 bottom-5 w-80 bg-white dark:bg-gray-800 rounded-xl p-6 overflow-y-auto">
            <h2 className="text-lg font-medium mb-4">Messages</h2>
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={user?.user?.image || ''} />
                    </Avatar>
                    <div className="flex-1">
                        <div className="font-medium">Jared Palmer</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Hey, did you see the new update?</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={user?.user?.image || ''} />
                    </Avatar>
                    <div className="flex-1">
                        <div className="font-medium">Colm Tuite</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">I excited to try out the new features!</div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={user?.user?.image || ''} />
                    </Avatar>
                    <div className="flex-1">
                        <div className="font-medium">Max Leiter</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Let\s schedule a call to discuss the roadmap.
                        </div>
                    </div>
                </div>
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
            </div>
        </aside>
    )
}

export default Messages