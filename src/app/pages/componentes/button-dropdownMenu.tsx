'use client'
import React, { useState } from 'react'

//icons
import { Ellipsis } from 'lucide-react'

//shadcn
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

//pages
import Modal_Confirm_Delete from './modal-confirm-delete'

interface Post {
    userName: string
    userId: string
    userCurrent: string
    postId: string
}

const Button_DrowpdownMenu = ({ userName, userId, userCurrent, postId }: Post) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleDeletePost = () => {
        setIsOpen(true)
    }

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <h1><Ellipsis /></h1>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>{userName}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Report</DropdownMenuItem>
                    <DropdownMenuItem>Copy link</DropdownMenuItem>
                    {
                        userCurrent === userId &&
                        <DropdownMenuItem onClick={handleDeletePost} >Delete</DropdownMenuItem>
                    }
                    <DropdownMenuItem>Cancelar</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu >
            <Modal_Confirm_Delete
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                postId={postId}
            />
        </>
    )
}

export default Button_DrowpdownMenu