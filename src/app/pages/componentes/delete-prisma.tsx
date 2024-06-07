'use server'

import { prisma } from "@/services/prisma"

export const Delete_Post_Prisma = async (postId: string) => {
    try {
        const postDelete = await prisma.post.delete({
            where: {
                id: postId
            }
        })
    } catch (error) {
        console.log(error)
    }
}