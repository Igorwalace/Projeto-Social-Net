import React from 'react'
import { auth } from '@/services/auth'
import Image from 'next/image'

//shadcn
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { prisma } from '@/services/prisma'
import { Separator } from "@/components/ui/separator"

const Posts = async () => {

    const user = await auth()
    const posts = await prisma.post.findMany({
        include: {
            author: {
                select: {
                    name: true,
                    email: true,
                    image: true,
                    userName: true
                }
            }
        }
    })

    return (
        <main className="flex bg-white rounded-xl dark:bg-gray-900 md:px-10 md:pb-10 md:pt-5 md:mr-96 py-5 px-5 md:max-w-2xl mx-auto ">
            <div className="grid gap-6">
                {
                    posts.map((post) => (
                        <>
                        <div className=" dark:bg-gray-800 rounded-xl" key={post.id} >
                            <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10">
                                    <AvatarImage src={post.author.image || ''} />
                                </Avatar>
                                <div className="flex-1">
                                    <div className="font-medium">{post.author.userName}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-3">
                                <div className="mt-4 text-gray-700 dark:text-gray-300 flex-col flex justify-center items-center gap-3">
                                    <div>
                                        <Image
                                            className='w-[100%] h-[500px]'
                                            src={post.image}
                                            alt={post.title}
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <p className='text-justify' >{post.title}</p>
                                </div>
                            </div>
                        </div>
                        <Separator  />
                        </>
                    ))
                }
            </div>
        </main >


    )
}

export default Posts