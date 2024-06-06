'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { storage } from '@/services/firebase-config';
import { Textarea } from '@/components/ui/textarea';

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

const Function_Send_Image = (session: any) => {

    const router = useRouter()

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('')
    const [check, setCheck] = useState(true)
    const [ready, setReady] = useState(false)
    const [buttonLoading, setButtonLoading] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [urlImg, setUrlImg] = useState('')

    useEffect(() => {
        if (progress > 100) return
        if (!urlImg) return
        if (!ready) return
        setCheck(false)
    }, [urlImg, progress, ready])

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
        if (!urlImg) return
        setButtonLoading(true)
        await Create_Post_Prisma(urlImg, title)
        setButtonLoading(false)
        router.push('/')
    }

    const handleClearImages = () => {
        setUrlImg('')
        setProgress(0)
        setCheck(true)
    }

    return (
        <>
            <div>
                <Label htmlFor="title">Title</Label>
                <Textarea
                    id="content"
                    placeholder="Start writing your post here..."
                    className="h-[100px]"
                    rows={10}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <div className="flex items-center justify-center">
                    <div className="md:w-[100%] w-5/6 relative flex items-center justify-center md:h-[300px] h-[300px] bg-white rounded-md">
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
                <Button variant='ghost' onClick={handleClearImages} >
                    Clear Images
                </Button>
                {
                    check
                        ?
                        <Button disabled >Publish Post</Button>
                        :
                        buttonLoading
                        ?
                        <Button disabled className='w-[114px]' ><span className="loader2"></span></Button>
                        :
                        <Button onClick={handlePublish}>Publish Post</Button>
                }
            </div>
        </>
    )
}

export default Function_Send_Image