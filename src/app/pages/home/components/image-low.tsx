//icons
import { Bookmark, Heart, MessageCircle } from 'lucide-react'

import React from 'react'

const Image_Low = () => {
    return (
        <>
            <div className='flex items-center justify-between' >
                <div className='flex items-center gap-3' >
                    <span><Heart /></span>
                    <span><MessageCircle /></span>
                </div>
                <span><Bookmark /></span>
            </div>
        </>
    )
}

export default Image_Low