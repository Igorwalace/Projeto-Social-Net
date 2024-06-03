import React from 'react'
import Button_Logout from '../componentes/button-logout'
import { auth } from '@/services/auth'
import { redirect } from 'next/navigation'
import Image from 'next/image'

const Home = async () => {

  const session:any = await auth()
  if (!session?.user) return redirect('/')

  return (
    <div className='flex items-center justify-center gap-2 flex-col' >
      <div>Home</div>
      <Button_Logout />
      {
        session &&
        <>
          <div className="border-2 border-blue-900 p-2 rounded-xl text-center space-y-3">
            <h1>{session.user.name}</h1>
            <h1>{session.user.email}</h1>
            <Image
              className='max-w-[200px] max-h-[200px]'
              quality={100}
              src={session?.user?.image}
              alt={session?.user?.name}
              width={500}
              height={500}
            />
          </div>
        </>
      }
    </div>
  )
}

export default Home