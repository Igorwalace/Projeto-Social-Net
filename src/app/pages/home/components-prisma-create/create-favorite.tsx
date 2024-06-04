'use server'

import { prisma } from "@/services/prisma"

export const Create_Favorite = async (userId: any, postId: string) => {
    const check = await prisma.favoritePost.findFirst({
        where: {
            postId: postId,
            userId: userId
        }
    })
    if (check) return
    try {
        await prisma.favoritePost.create({
            data: {
                postId: postId,
                userId: userId
            }
        })
    } catch (error) {
        console.log(error)
    }
}