import React from 'react'

//prisma
import { prisma } from '@/services/prisma'

//shadcn
import { auth } from '@/services/auth'

//pages
import Post_single from '../../componentes/post-single'

const Posts = async () => {

    const session = await auth()
    const posts = await prisma.post.findMany({
        include: {
            FavoritePost: {
                select: {
                    user: true
                }
            },
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
        <main className="flex flex-col items-center justify-center gap-5 rounded-xl bg-slate-100 md:px-10 py-5 w-full md:max-w-xl md:mx-auto">
            {
                posts.map((post) => (
                    <Post_single post={post} key={post.id} session={session} />
                ))
            }
        </main >
    )
}

export default Posts
