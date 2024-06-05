import Image from 'next/image'
import React from 'react'

//shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

//pages
import Avatar_Shadcn from '../../componentes/avatar-shadcn'
import { auth } from '@/services/auth'
import { prisma } from '@/services/prisma'

const Profile_Single = async () => {

    const session = await auth()
    const user = await prisma.user.findFirst({
        where: {
            id: session?.user?.id
        },
        include: {
            Post: {

            }
        }
    })

    return (

        <div className="w-full md:max-w-xl md:mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
                <div className="relative h-32 bg-gray-200 dark:bg-gray-800">
                    {/* <Image src="/placeholder.svg" alt="Banner" className="w-full h-full object-cover" width={400} height={128} /> */}
                </div>
                <div className="flex items-center px-6 -mt-12">
                    <div className="relative">
                        <Avatar className="w-24 h-24 border-4 border-white dark:border-gray-900 rounded-full">
                            <Avatar_Shadcn />
                            <AvatarFallback className='text-3xl' >{user?.image}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="mt-14 ml-4 flex items-center flex-col justify-center">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">{user?.name}</h2>
                        <p className="text-gray-600 dark:text-gray-400">@{user?.userName}</p>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <p className="text-gray-700 dark:text-gray-300">
                        Hi, Im John Doe. Im a software engineer and I love to code!
                    </p>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-800 px-6 py-4 grid grid-cols-3 gap-4">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{user?.Post.length}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{user?.Post.length == 1 ? 'Post' : 'Posts'}</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">0</h3>
                        <p className="text-gray-600 dark:text-gray-400">Followers</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">0    </h3>
                        <p className="text-gray-600 dark:text-gray-400">Following</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile_Single