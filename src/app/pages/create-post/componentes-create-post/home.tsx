//shadcn
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

// /react
import React from 'react'

//pages
import Function_Send_Image from './function-send-image'
import { auth } from '@/services/auth'

const Home = async () => {

    const session = await auth()

    return (
        <>
            <div className="w-full md:max-w-xl md:mx-auto md:p-0 p-4 px-6">
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold">Create a New Post</h1>
                        <p className="text-gray-500 dark:text-gray-400">Share your thoughts and ideas with the world.</p>
                    </div>
                    <div className="space-y-4">
                        <Function_Send_Image session={session} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home