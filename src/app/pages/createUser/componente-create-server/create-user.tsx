'use server';

//react
import { redirect } from "next/navigation";

//prisma
import { prisma } from "@/services/prisma";
import { auth } from "@/services/auth";

const createAccount = async (userName: any) => {
    const session = await auth()
    const id = session?.user?.id
    try {
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
    redirect('/');
}

export default createAccount