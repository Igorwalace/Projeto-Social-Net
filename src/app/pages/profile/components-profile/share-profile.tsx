'use client'
import React, { useState } from 'react'

//shadcn
import { Button } from '@/components/ui/button'

const Share_Profile = () => {
    const [isCopy, setIsCopy] = useState(false)

    const completeUrl = window.location.href;

    const copylink = () => {
        setIsCopy(true)
        navigator.clipboard.writeText(completeUrl)
        setTimeout(() => {
            setIsCopy(false)
        }, 2000)
    }

    return (
        <Button variant='ghost' onClick={copylink} className='w-full'>
            {
                isCopy ? 'Profile copied' : 'Share profile'
            }
        </Button>
    )
}

export default Share_Profile