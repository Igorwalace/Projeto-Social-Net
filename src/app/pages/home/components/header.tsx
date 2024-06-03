
//fonts
import { bree_serif } from '@/app/fonts/font'

//next
import Link from 'next/link'
import React from 'react'

//shadcn
import { Button } from '@/components/ui/button'

//pages
import AvatarFunctions from './avatar'

const Header = () => {

    return (
        <>
            <main className='bg-[var(--main)] text-white py-4 px-6' >
                <header className='flex items-center justify-between max-w-6xl mx-auto' >
                    <div className="flex items-center">
                        <Link className="flex items-center" href="#">
                            <span className={`${bree_serif.className} text-2xl font-bold`}>Social Net</span>
                        </Link>
                    </div>
                    <nav className='flex items-center justify-center gap-3' >
                        <div>
                            <Button variant='ghost' >Messages</Button>
                        </div>
                        <div>
                            <Button variant='ghost' >Create Post</Button>
                        </div>
                        <AvatarFunctions />
                    </nav>
                </header>
            </main>
        </>
    )
}

export default Header