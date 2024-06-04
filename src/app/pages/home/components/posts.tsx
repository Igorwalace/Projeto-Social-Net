import React from 'react'
import Image from 'next/image'

//prisma
import { prisma } from '@/services/prisma'

//shadcn
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Separator } from "@/components/ui/separator"
import { Ellipsis } from 'lucide-react'
import Image_Low from './image-low'

const Posts = async () => {

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
        <main className="flex flex-col items-center justify-center gap-5 bg-slate-100 rounded-xl md:px-10 py-5">
            {
                posts.map((post) => (
                    <div className='space-y-4' key={post.id} >
                        <div className="flex items-center justify-between px-4 w-full">
                            <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10">
                                    <AvatarImage src={post.author.image || ''} />
                                </Avatar>
                                <div className="flex-1">
                                    <div className="font-medium">
                                        <h1 className="md:text-base text-sm font-extrabold">
                                            {post.author.userName}
                                        </h1>
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        <p className='md:text-xs text-xs' >{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1><Ellipsis /></h1>
                            </div>
                        </div>
                        <div className='md:[500px] w-full md:h-auto md:max-h-[468px] max-h-[520px] overflow-hidden'>
                            <Image
                                src={post.image || ''}
                                alt='Imagens'
                                width={500}
                                height={500}
                            />
                        </div>
                        <div>
                            <Image_Low />
                        </div>
                        {
                            post.title.length > 0 &&
                            <div className='text-sm max-w-[500px] px-2 md:px-0 space-x-2' >
                                <p className='font-extrabold text-black' >{post.author.userName}
                                    <span className='font-normal ml-2' >{post.title}</span>
                                </p>
                            </div>
                        }
                        <Separator />
                    </div>
                ))
            }
        </main >


    )
}

export default Posts
