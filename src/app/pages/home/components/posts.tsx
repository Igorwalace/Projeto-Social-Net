import React from 'react'
import { auth } from '@/services/auth'

//shadcn
import { Avatar, AvatarImage } from '@/components/ui/avatar'

const Posts = async () => {

    const user = await auth()

    return (
        <main className="flex-1 bg-gray-100 dark:bg-gray-900 p-6 md:p-10 mr-80">
            <div className="grid gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6">
                    <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src={user?.user?.image || ''} />
                        </Avatar>
                        <div className="flex-1">
                            <div className="font-medium">Jared Palmer</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">2 hours ago</div>
                        </div>
                    </div>
                    <div className="mt-4 text-gray-700 dark:text-gray-300">
                        <p>
                            Excited to share my latest project with you all! I\ve been working on a new social network platform
                            that focuses on creating a more authentic and engaging experience for users. The key features include:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Unique post formats to share your thoughts and ideas</li>
                            <li>Seamless messaging system to connect with friends and communities</li>
                            <li>Powerful analytics to help you understand your audience and optimize your content</li>
                        </ul>
                        <p className="mt-2">I\d love to hear your feedback and thoughts! Let me know what you think.</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6">
                    <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src={user?.user?.image || ''} />
                        </Avatar>
                        <div className="flex-1">
                            <div className="font-medium">Colm Tuite</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">1 day ago</div>
                        </div>
                    </div>
                    <div className="mt-4 text-gray-700 dark:text-gray-300">
                        <p>
                            Just wanted to share a quick update on our latest product release. We\ve been working hard to
                            incorporate feedback from our beta users and are excited to roll out some new features:
                        </p>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Improved user profiles with more customization options</li>
                            <li>Enhanced messaging capabilities, including group chats and file sharing</li>
                            <li>Streamlined analytics dashboard to help you track your content performance</li>
                        </ul>
                        <p className="mt-2">
                            Let me know if you have any questions or feedback! We\re always striving to make the platform better
                            for our users.
                        </p>
                    </div>
                </div>
            </div>
        </main>


    )
}

export default Posts