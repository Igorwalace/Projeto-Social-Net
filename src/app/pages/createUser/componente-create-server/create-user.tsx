'use server';
//prisma
import { prisma } from "@/services/prisma";
import { auth } from "@/services/auth";

const createAccount = async (userName: any) => {
    const session = await auth()
    const id = session?.user?.id
    try {
        const userCheck = await prisma.user.findFirst({
            where: {
                userName: userName
            }
        })
        if(userCheck){
            return 'Exist'
        } 
        await prisma.user.update({
            where: {
                id: id
            },
            data: {
                userName: userName
            }
        });
    } catch (error) {
        console.log(error)
    }
}

export default createAccount