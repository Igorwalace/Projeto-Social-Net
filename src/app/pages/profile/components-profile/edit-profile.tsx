'use client'
import React, { useState } from 'react'

//shadcn
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

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

    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [newName, setNewName] = useState(name)
    const [newUserName, setNewUserName] = useState(userName)
    const [newBio, setNewBio] = useState(description)

    const handleSave = async () => {
        if (
            newName.length > 20 ||
            newBio.length > 70 ||
            newUserName.length > 20
        ) {
            toast({
                title: "Attention!",
                description: "Review again."
            })
            return
        }

        if(newName === '' && newUserName === '' && newBio === ''){
            setIsOpen(false)
            return
        }
        if(newBio.length < 10){
            toast({
                title: "Attention!",
                description: "Add more words to bio."
            })
            return
        }
        if(newUserName.length < 3){
            toast({
                title: "Attention!",
                description: "Add more words to username."
            })
            return
        }
        if(newName.length < 3){
            toast({
                title: "Attention!",
                description: "Add more words to name."
            })
            return
        }

        setIsLoading(true)
        await uploadProfile(newName, newUserName, newBio)
        setIsLoading(false)

        toast({
            title: "Warning!",
            description: "For the changes to take effect, you need to reload the page."
        })
        setIsOpen(false)
    }

    const handleKeyPress = (e: any) => {
        if (!isNaN(e.key)) {
            e.preventDefault();
        }
    }

    const handleCancel = () => {
        setIsOpen(false)
        setNewUserName('')
        setNewName('')
        setNewBio('')
    }

    return (
        <>
            <Button onClick={() => setIsOpen(true)} variant='ghost' className='w-[90%] bg-[var(--main)] text-white'>Edit Profile</Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen} >
                <SheetContent side='top' className='rounded-b-lg md:w-[50%] w-full mx-auto ' >
                    <SheetHeader className='text-left' >
                        <SheetTitle>Edit profile</SheetTitle>
                        <h1 className='text-sm' >Make changes to your profile here. Click save when you&apos;re done.</h1>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <div className="col-span-3 grid gap-1">
                                <Input id="name" placeholder={name} onKeyPress={handleKeyPress} onChange={(e) => setNewName(e.target.value)} className="col-span-3" />
                                <div className="text-xs text-gray-500 dark:text-gray-400 px-3"><span className={`${newName.length > 20 && 'text-red-800'}`} >{newName.length}</span> - 20 characters</div>
                            </div>
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <div className="col-span-3 grid gap-1">
                                <Input id="username" placeholder={userName} onChange={(e) => setNewUserName(e.target.value)} className="col-span-3" />
                                <div className="text-xs text-gray-500 dark:text-gray-400 px-3"><span className={`${newUserName.length > 20 && 'text-red-800'}`} >{newUserName.length}</span> - 20 characters</div>
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
                                <div className="text-xs text-gray-500 dark:text-gray-400 px-3"><span className={`${newBio.length > 70 && 'text-red-800'}`} >{newBio.length}</span> - 70 characters</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center md:justify-end gap-2 flex-col md:flex-row">
                        {
                            isLoading 
                            ?
                            <button className='p-2 text-sm w-full md:w-auto rounded-md bg-slate-500 text-white hover:scale-[1.01] duration-200' onClick={handleSave} disabled >Saving changes...</button>
                            :
                            <button className='p-2 text-sm w-full md:w-auto rounded-md bg-[var(--main)] text-white hover:scale-[1.01] duration-200' onClick={handleSave} >Save changes</button>
                        }
                        <button className='p-2 w-full text-sm md:w-auto rounded-md bg-white border-[1px] border-gray-300 text-[var(--main)]' onClick={handleCancel} >Cancel</button>
                    </div>
                </SheetContent>
            </Sheet>


        </>
    )
}

export default Edit_Profile