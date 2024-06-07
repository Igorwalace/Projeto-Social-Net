//react
import Image from 'next/image'
import React from 'react'

//shadcn
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

//pages
import Image_Low from '../home/components/image-low'
import { PostSingle } from '../../../services/tcs'
import Button_DrowpdownMenu from './button-dropdownMenu'


interface Post {
    post: PostSingle
    session: any
}

const Post_single = ({ post, session }: Post) => {

    return (
        <div className='space-y-4 w-full' key={post.id} >
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
                            <p className='md:text-xs text-xs' >{post.createdAt.toLocaleDateString()} - {post.createdAt.getHours()}:{post.createdAt.getMinutes()}</p>
                        </div>
                    </div>
                </div>
                <Button_DrowpdownMenu
                    userName={post.author.userName || ''}
                    userId={post.authorId || ''}
                    userCurrent={session.user.id || ''}
                    postId={post.id || ''}
                />
            </div>
            <div className='w-full min-h-[250px] md:min-h-[300px] flex items-center justify-center md:max-h-[468px] max-h-[520px] overflow-hidden h-auto'>
                <Image
                    className='rounded-md w-full h-auto'
                    src={post.image || ''}
                    alt='Imagens'
                    width={500}
                    height={500}
                    priority
                />
            </div>
            <div>
                <Image_Low
                    userId={session?.user?.id}
                    postId={post.id}
                />
            </div>
            {
                post.title.length > 0 &&
                <div className='text-sm px-4 space-x-2' >
                    <p className='font-extrabold text-black' >{post.author.userName}
                        <span className='font-normal ml-2' >{post.title}</span>
                    </p>
                </div>
            }
            <Separator />
        </div>
    )
}

export default Post_single