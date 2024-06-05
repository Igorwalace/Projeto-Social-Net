//next
import React from 'react'
import { auth } from '@/services/auth'

//shadcn
import { Avatar, AvatarImage } from '@/components/ui/avatar'

//icons
import { CirclePlus, Bookmark, HomeIcon, SearchIcon, SlidersHorizontal } from 'lucide-react'

const Footer_Mobile = async () => {

    const user = await auth()

    return (
        <>
            <main className='bg-[var(--main)] text-white py-3 px-6' >
                <header className='flex items-center justify-between max-w-6xl mx-auto' >
                    <span><HomeIcon className="w-5 h-5" /></span>
                    <span><SearchIcon /></span>
                    <Avatar className="w-8 h-8">
                        <AvatarImage src={user?.user?.image || ''} />
                    </Avatar>
                    <span><Bookmark className="w-5 h-5" /></span>
                    <span><CirclePlus className="w-5 h-5" /></span>
                </header>
            </main>
        </>
    )
}

export default Footer_Mobile