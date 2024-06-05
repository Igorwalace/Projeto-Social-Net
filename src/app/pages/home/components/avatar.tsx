
//shadcn
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"


//react
import React from 'react'
import { auth } from '@/services/auth'

//pages
import Button_Logout from "../../componentes/button-logout"

//icons
import { Menu } from "lucide-react"

const AvatarFunctions = async () => {

    const user = await auth()

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger className="bg-transparent" >
                    <Avatar className='md:block hidden w-8 h-8 md:w-10 md:h-10 border-[1px] border-white' >
                        <AvatarImage className="" src={user?.user?.image || ''} />
                    </Avatar>
                    <span className="z-50" ><Menu className="w-7 h-7" /></span>
                </MenubarTrigger>
                <MenubarContent className="mt-2 mr-5" >
                    <MenubarItem>Profile</MenubarItem>
                    <MenubarItem>Favorites</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Feed</MenubarItem>
                    <MenubarSeparator />
                    <Button_Logout />
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}

export default AvatarFunctions