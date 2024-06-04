import React from 'react'

//icons lucide
import { Bookmark } from 'lucide-react'

const Favorites = () => {
    return (
        <div className="flex items-center gap-3" >
            <span><Bookmark className="w-6 h-6" /></span>
            <div className="font-medium">
                <h1>Favorites</h1>
            </div>
        </div>
  )
}

export default Favorites