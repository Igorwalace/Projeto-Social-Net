import React from 'react'

//icons lucide
import { CirclePlus } from 'lucide-react'

const Create_Post = () => {
    return (
        <div className="flex items-center gap-3" >
            <span><CirclePlus className="w-6 h-6" /></span>
            <div className="font-medium">
                <h1>Create</h1>
            </div>
        </div>
  )
}

export default Create_Post