import { auth } from '@/services/auth'
import Link from 'next/link'
import React from 'react'

//prisma
import { prisma } from '@/services/prisma'

//shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

//fonts
import { poppins } from '@/app/fonts/font'

//pages
import Post_single from '../../componentes/post-single'
import Edit_Profile from './edit-profile'
import Share_Profile from './share-profile'

interface Id {
    profileId: string
}

const Profile_Single = async ({ profileId }: Id) => {
    const session = await auth()

    const user = await prisma.user.findFirst({
        where: {
            id: profileId
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
                            <AvatarImage src={user?.image || ''} />
                            <AvatarFallback className='text-3xl text-white bg-[var(--main)] z-10' >{user?.name?.charAt(0).toUpperCase()}{user?.name?.slice(1).charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="w-full mt-14 ml-1 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">{user?.name}</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">@{user?.userName}</p>
                    </div>
                </div>
                <div className="px-6 py-4">
                    {
                        user?.description != null
                            ?
                            <pre className={`${poppins.className} text-gray-700 dark:text-gray-300 text-sm`}>
                                {user?.description}
                            </pre>
                            :
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Bio
                            </p>

                    }
                </div>
                <div className="px-2"><Separator /></div>
                <div className=" border-gray-200 px-6 py-2 grid grid-cols-1 gap-4">
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{user?.Post.length}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{user?.Post.length == 1 ? 'Post' : 'Posts'}</p>
                    </div>
                </div>
                <div className='flex mb-2 items-center justify-center gap-3 px-3' >
                    {
                        session?.user?.id === profileId &&
                        <Edit_Profile
                            name={user?.name || ''}
                            userName={user?.userName || ''}
                            description={user?.description || 'nenhum'}
                        />
                    }
                    <Share_Profile />
                </div>
                <main className="flex flex-col items-center justify-center gap-5 bg-slate-100 py-5 w-full md:max-w-xl md:mx-auto">
                    {
                        posts.length === 0 &&
                        <div className='flex items-center justify-center gap-3 flex-col' >
                            <h1>You have no posts to show.</h1>
                            <Link href='/pages/create-post' ><Button variant='link' >Create new post</Button></Link>
                        </div>
                    }
                    {
                        posts
                            .toReversed()
                            .map((post) => (
                                <Post_single post={post} key={post.id} session={session} />
                            ))
                    }
                </main >
            </div>
        </div>
    )
}

export default Profile_Single