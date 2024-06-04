import React from 'react'

//icons lucide
import { HomeIcon } from 'lucide-react'

const Home = () => {
    return (
        <div className="flex items-center gap-3" >
            <span><HomeIcon className="w-6 h-6" /></span>
            <div className="font-medium">
                <h1>Home</h1>
            </div>
        </div>
  )
}

export default Home