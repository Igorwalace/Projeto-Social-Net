import React from 'react'

//icons lucide
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'

const Create_Post = () => {
    return (
        <Link href='/pages/create-post' className="flex items-center gap-3" >
            <span><CirclePlus className="w-6 h-6" /></span>
            <div className="font-medium">
                <h1>Create</h1>
            </div>
        </Link>
  )
}

export default Create_Post