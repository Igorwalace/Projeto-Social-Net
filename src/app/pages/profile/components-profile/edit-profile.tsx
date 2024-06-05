'use client'
import React, { useState } from 'react'

//shadcn
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { uploadProfile } from './upload.profile'
import { useToast } from '@/components/ui/use-toast'

interface UserEdit {
    name: string
    userName: string
    description: string
}

const Edit_Profile = ({ name, userName, description }: UserEdit) => {
    const { toast } = useToast()

    const [newName, setNewName] = useState('')
    const [newUserName, setNewUserName] = useState('')
    const [newBio, setNewBio] = useState('')

    const handleSave = async () => {
        if (newName.length > 20) {
            // toast({
            //     title: "Alert!",
            //     description: "Você ",
            // })
            return
        }
        uploadProfile(newName, newUserName, newBio)
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant='ghost'>Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] w-5/6 rounded-md">
                <DialogHeader className='text-left' >
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <div className="col-span-3 grid gap-1">
                            <Input id="name" placeholder={name} onChange={(e) => setNewName(e.target.value)} className="col-span-3" />
                            <div className="text-xs text-gray-500 dark:text-gray-400 px-3">{newName.length} - 20 characters</div>
                        </div>
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <div className="col-span-3 grid gap-1">
                            <Input id="username" placeholder={userName} onChange={(e) => setNewUserName(e.target.value)} className="col-span-3" />
                            <div className="text-xs text-gray-500 dark:text-gray-400 px-3">{newUserName.length} - 20 characters</div>
                        </div>
                    </div>
                    <div className="grid items-center grid-cols-4 gap-4">
                        <Label htmlFor="bio" className="text-right">
                            Bio
                        </Label>
                        <div className="col-span-3 grid gap-1">
                            <Textarea
                                id="bio"
                                placeholder={description}
                                onChange={(e) => setNewBio(e.target.value)}
                                className="col-span-3"
                            />
                            <div className="text-xs text-gray-500 dark:text-gray-400 px-3">{newBio.length} - 100 characters</div>
                        </div>
                    </div>
                </div>
                <DialogFooter className='flex items-center justify-center md:flex-row flex-col gap-2' >
                    <button className='p-2 w-full md:w-auto rounded-md bg-[var(--main)] text-white hover:scale-[1.01] durantion-200' onClick={handleSave} >Save changes</button>
                    <button className='p-2 w-full md:w-auto rounded-md bg-white border-[1px] border-gray-300 text-[var(--main)]'>Cancel</button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

export default Edit_Profile