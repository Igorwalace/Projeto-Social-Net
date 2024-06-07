'use server'

import { auth } from "@/services/auth"
import { prisma } from "@/services/prisma"

export const Check_User_Complete = async () => {
    try {
        const session = await auth()
        const checkProfile = await prisma.user.findFirst({
            where: {
                id: session?.user?.id
            }
        })
        if(checkProfile?.userName === null) return 'Incomplete'
    } catch (error) {
        console.log(error)
    }
}