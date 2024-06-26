//icons
import { Bookmark, Heart, MessageCircle } from 'lucide-react'

//react
import React, { useEffect } from 'react'
import { auth } from '@/services/auth'

//functions

//prisma
import { prisma } from '@/services/prisma'

interface Ids {
    userId: any
    postId: string
}

const Image_Low = async ({ userId, postId }: Ids) => {

    // const session = await auth()
    // const favorite = await prisma.favoritePost.findFirst({
    //     where: {
    //         userId: session?.user?.id,
    //         postId: postId
    //     }
    // })

    return (
        <>
            <div className='flex items-center justify-between px-4' >
                <div className='flex items-center gap-3' >
                    <span><Heart /></span>
                    <span><MessageCircle /></span>
                </div>
                <button><Bookmark /></button>
            </div>
        </>
    )
}

export default Image_Low