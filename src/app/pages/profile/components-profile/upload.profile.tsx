'use server'
import { auth } from "@/services/auth"
import { prisma } from "@/services/prisma"

export const uploadProfile = async (newName: string, newUserName: string, newBio: string) => {
    const user = await auth()
    try {
        const check = await prisma.user.findFirst({
            where: {
                userName: newUserName
            }
        })
        if(check) return true
        await prisma.user.update({
            where: {
                id: user?.user?.id
            },
            data: {
                name: newName,
                userName: newUserName,
                description: newBio
            }
        })
    } catch (error) {
        console.log(error)
    }
}