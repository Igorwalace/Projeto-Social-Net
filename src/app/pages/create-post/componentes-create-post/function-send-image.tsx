'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { storage } from '@/services/firebase-config';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

//firebase
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

//react
import React, { useEffect } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

//vercel
import { useState } from 'react';

//function
import { Create_Post_Prisma } from './create-post-prisma';
import { prisma } from '@/services/prisma';
import { Check_User_Complete } from './check-user-complet';

const Function_Send_Image = (session: any) => {

    const router = useRouter()
    const { toast } = useToast()

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('')
    const [check, setCheck] = useState(true)
    const [ready, setReady] = useState(false)
    const [buttonLoading, setButtonLoading] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [urlImg, setUrlImg] = useState('')

    useEffect(() => {
        setCheck(true)
        if (progress > 100) return
        if (!urlImg) return
        if (!ready) return
        if (isLoading) return
        setCheck(false)
    }, [urlImg, progress, ready, isLoading])

    const handleFileInput = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            setIsLoading(true)
            setFile(file);
            uploadFile(file)
        }
    };

    const uploadFile = async (file: any) => {

        if (file) {
            const date = new Date()
            const d = date.getDay()
            const mes = date.getMonth()
            const y = date.getFullYear()
            const h = date.getHours()
            const min = date.getMinutes()
            const s = date.getSeconds()
            const mill = date.getMilliseconds()

            const storageRef = ref(storage, `NewImagens/${session.id}/${file.name} - ${h}-${min}-${s}-${mill} __ ${d}-${mes}-${y}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            //start upload
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress)
                },
                (error) => {
                    switch (error.code) {
                        case 'storage/unauthorized':
                            break;
                        case 'storage/canceled':
                            break;
                        case 'storage/unknown':
                            break;
                    }
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setUrlImg(downloadURL)
                    });
                }
            );
            //end
        }
    }

    const handlePublish = async () => {
        setButtonLoading(true)
        const check = await Check_User_Complete()
        if (check === 'Incomplete') {
            toast({
                title: "Attencion!",
                description: "You need to complete your profile to continue.",
            })
            setButtonLoading(false)
            return
        }
        if (!urlImg) return
        await Create_Post_Prisma(urlImg, title)
        setButtonLoading(false)
        setUrlImg('')
        setProgress(0)
        setCheck(true)
        router.refresh()
        router.push('/')
    }

    const handleClearImages = () => {
        setUrlImg('')
        setFile(null)
        setProgress(0)
        setCheck(true)
    }

    return (
        <>
            <div>
                <Label className='ml-3' htmlFor="content">Description</Label>
                <Textarea
                    id="content"
                    placeholder="Start writing your post here... (opcional)"
                    className="h-[100px]"
                    rows={10}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <div className="flex items-start justify-center flex-col gap-2">
                    <Label className='ml-3' htmlFor="file">Image</Label>
                    <div className="w-full relative flex items-center justify-center md:h-[300px] h-[300px] bg-white rounded-md">
                        {
                            isLoading &&
                            <div className='bg-[rgb(0,0,0,0.3)] absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center rounded-md z-20' >
                                <span className="loader"></span>
                            </div>
                        }
                        {
                            !file &&
                            <Label htmlFor="file" className='bg-blue-600 p-3 rounded-md hover:scale-95 duration-200 cursor-pointer z-10' >Add a image</Label>
                        }
                        {
                            urlImg &&
                            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ' >
                                <Image
                                    src={urlImg}
                                    alt={urlImg}
                                    width={200}
                                    height={200}
                                    onLoad={() => {
                                        setReady(true)
                                        setIsLoading(false)
                                    }}
                                    className="rounded-md w-auto h-auto max-w-[80%] max-h-[280px]"
                                />
                            </div>
                        }
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <Input id='file' name="file" type="file" className='hidden' required onChange={handleFileInput} />
                </div>
            </div>
            <div className="flex justify-end">
                <Button variant='ghost' disabled={isLoading || buttonLoading} onClick={handleClearImages}>
                    Clear Images
                </Button>
                <Button className={`${buttonLoading && 'w-[114px]'}`} disabled={buttonLoading || check} onClick={handlePublish}>
                    {
                        buttonLoading ? <span className="loader2"></span> : 'Publish Post'
                    }
                </Button>
            </div>
        </>
    )
}

export default Function_Send_Image