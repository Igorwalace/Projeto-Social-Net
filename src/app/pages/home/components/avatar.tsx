
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
import Button_Logout from "../../componentes/button-logout"

const AvatarFunctions = async () => {

    const user = await auth()

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger className="bg-transparent" >
                    <Avatar className='border-[1px] border-white' >
                        <AvatarImage src={user?.user?.image || ''} />
                    </Avatar>
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