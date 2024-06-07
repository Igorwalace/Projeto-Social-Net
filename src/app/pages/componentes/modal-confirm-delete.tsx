'use client'

//shadcn
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from "next/navigation"

//react
import React, { useState } from 'react'

//functions
import { Delete_Post_Prisma } from "./delete-prisma"
import Loading from "./loading"

interface State {
    isOpen: boolean
    setIsOpen: any
    postId: string
}


const Modal_Confirm_Delete = ({ isOpen, setIsOpen, postId }: State) => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleConfirmDelete = async () => {
        setIsLoading(true)
        await Delete_Post_Prisma(postId)
        router.refresh()
        setIsLoading(false)
    }

    return (
        <>
            <AlertDialog open={isOpen} onOpenChange={setIsOpen} >
                <AlertDialogContent className="md:w-auto w-[90%] rounded-xl " >
                    <AlertDialogHeader className="text-left" >
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your post
                            and remove from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleConfirmDelete} >Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        {
            isLoading && <Loading />
        }
        </>
    )
}

export default Modal_Confirm_Delete