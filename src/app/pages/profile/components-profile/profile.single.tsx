import { auth } from '@/services/auth'
import React from 'react'

//prisma
import { prisma } from '@/services/prisma'

//shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

//pages
import Avatar_Shadcn from '../../componentes/avatar-shadcn'
import Post_single from '../../componentes/post-single'
import Edit_Profile from './edit-profile'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { poppins } from '@/app/fonts/font'
import Link from 'next/link'

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
                    <Edit_Profile
                        name={user?.name || ''}
                        userName={user?.userName || ''}
                        description={user?.description || 'nenhum'}
                    />
                    <Button variant='ghost' className='w-full'>Share profile</Button>
                </div>
                <main className="flex flex-col items-center justify-center gap-5 bg-slate-100 md:px-10 py-5 w-full md:max-w-xl md:mx-auto">
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