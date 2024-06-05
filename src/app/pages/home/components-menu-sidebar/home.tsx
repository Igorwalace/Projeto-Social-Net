import Link from 'next/link'
import React from 'react'

//icons lucide
import { HomeIcon } from 'lucide-react'

const Home = () => {
    return (
        <Link href='/' className="flex items-center gap-3" >
            <span><HomeIcon className="w-6 h-6" /></span>
            <div className="font-medium">
                <h1>Home</h1>
            </div>
        </Link>
  )
}

export default Home