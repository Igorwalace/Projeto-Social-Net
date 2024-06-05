import { auth } from '@/services/auth'
import React from 'react'

//prisma
import { prisma } from '@/services/prisma'

//shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'

//pages
import Avatar_Shadcn from '../../componentes/avatar-shadcn'
import Post_single from '../../componentes/post-single'

const Profile_Single = async () => {

    const session = await auth()
    const user = await prisma.user.findFirst({
        where: {
            id: session?.user?.id
        },
        include: {
            Post: true
        }
    })
    const posts = await prisma.post.findMany({
        where: {
            authorId: user?.id
        },
        include: {
            FavoritePost: {
                select: {
                    user: true
                }
            },
            author: true
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
                    <div className="w-full mt-14 ml-4 flex items-center justify-between">
                        <div className="flex items-center justify-center flex-col">
                            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">{user?.name}</h2>
                            <p className="text-gray-600 dark:text-gray-400">@{user?.userName}</p>
                        </div>
                        <Button variant='ghost'>Edit Profile</Button>
                    </div>
                </div>
                <div className="px-6 py-4">
                    {
                        user?.description != null
                            ?
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                {user?.description}
                            </p>
                            :
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Bio
                            </p>

                    }
                </div>
                <div className="border-y border-gray-200 dark:border-gray-800 px-6 py-4 grid grid-cols-1 gap-4">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{user?.Post.length}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{user?.Post.length == 1 ? 'Post' : 'Posts'}</p>
                    </div>
                </div>
                <main className="flex flex-col items-center justify-center gap-5 bg-slate-100 md:px-10 py-5 w-full md:max-w-xl md:mx-auto">
                    {
                        posts.map((post) => (
                            <Post_single post={post} key={post.id} session={session} />
                        ))
                    }
                </main >
            </div>
        </div>
    )
}

export default Profile_Single