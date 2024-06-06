//next
import React from 'react'
import Link from 'next/link'
import { auth } from '@/services/auth'

//shadcn
import { Avatar, AvatarImage } from '@/components/ui/avatar'

//icons
import { CirclePlus, Bookmark, HomeIcon, SearchIcon } from 'lucide-react'

const Footer_Mobile = async () => {

    const user = await auth()

    return (
        <>
            <main className='bg-[var(--main)] text-white py-3 px-6' >
                <header className='flex items-center justify-between max-w-6xl mx-auto' >
                    <Link href='/' ><HomeIcon className="w-5 h-5" /></Link>
                    <span><SearchIcon /></span>
                    <Link href='/pages/profile' >
                        <Avatar className="w-8 h-8">
                            <AvatarImage src={user?.user?.image || ''} />
                        </Avatar>
                    </Link>
                    <span><Bookmark className="w-5 h-5" /></span>
                    <Link href='/pages/create-post' ><CirclePlus className="w-5 h-5" /></Link>
                </header>
            </main>
        </>
    )
}

export default Footer_Mobile