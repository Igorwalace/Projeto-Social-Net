'use server'

import { auth } from "@/services/auth"
import { prisma } from "@/services/prisma"

export const Create_Post_Prisma = async (urlImg: string, title: string) => {
    const user = await auth()
    try {
        await prisma.post.create({
            data: {
                title: title,
                authorId: user?.user?.id || '',
                image: urlImg
            }
        })
    } catch (error) {
        console.log(error)
    }
}