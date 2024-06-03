//next/react
import React from 'react'
import { auth } from '@/services/auth'
import Image from 'next/image'

//pages
import Button_Logout from '../componentes/button-logout'
import Link from 'next/link'

const Home = async () => {

  const session: any = await auth()

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
            <h1>{session?.user?.userName}</h1>
            <Image
              className='max-w-[200px] max-h-[200px] rounded-xl'
              quality={100}
              src={session?.user?.image}
              alt={session?.user?.name}
              width={500}
              height={500}
            />
          </div>
        </>
      }
      <Link href='/pages/createUser' >Criar User</Link>
    </div>
  )
}

export default Home