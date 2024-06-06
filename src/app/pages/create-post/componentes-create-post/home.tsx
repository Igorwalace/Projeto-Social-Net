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
                    {/* <div>
                        <h2 className="text-2xl font-bold">Preview</h2>
                        <div className="prose prose-gray dark:prose-invert">
                            <h3>{title}</h3>
                            <div className="grid grid-cols-3 gap-4">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src="/placeholder.svg"
                                        alt={`Image ${index + 1}`}
                                        width={200}
                                        height={200}
                                        className="object-cover rounded-md"
                                    />
                                ))}
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default Home