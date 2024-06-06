
//shadcn
import { Avatar } from "@/components/ui/avatar"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"


//react
import React from 'react'
import Link from "next/link"

//pages
import Button_Logout from "../../componentes/button-logout"

//icons
import { Menu } from "lucide-react"
import Avatar_Shadcn from "../../componentes/avatar-shadcn"

const AvatarFunctions = async () => {


    return (
        <>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className="bg-transparent" >
                        <Avatar className='md:block hidden w-8 h-8 md:w-10 md:h-10 md:border-[1px] border-white' >
                            <Avatar_Shadcn />
                        </Avatar>
                        <Menu className="w-7 h-7 md:hidden z-50" />
                    </MenubarTrigger>
                    <MenubarContent className="mt-2 mr-5" >
                        <MenubarItem><Link href='/pages/profile' >Profile</Link></MenubarItem>
                        <MenubarItem>Favorites</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem><Link href='/' >Home</Link></MenubarItem>
                        <MenubarSeparator />
                        <Button_Logout />
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </>
    )
}

export default AvatarFunctions