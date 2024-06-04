import React from 'react'

//icons lucide
import { SlidersHorizontal } from 'lucide-react'

const Settings = () => {
    return (
        <div className="flex items-center gap-3" >
            <span><SlidersHorizontal className="w-6 h-6" /></span>
            <div className="font-medium">
                <h1>Mais</h1>
            </div>
        </div>
  )
}

export default Settings