import React from 'react'
import Page_Sign_In from './componentes/page-sign-in'
import { auth } from '@/services/auth'

const Home = async () => {

  const session = await auth()

  return (
    <>
      <main className="mt-4 flex items-center justify-center gap-3 flex-col">
        <h1>Aqui é minha home.</h1>
        <Page_Sign_In />
        {
          session &&
          <div className="border-2 border-blue-900 p-2 text-center rounded-xl">
            <h1>{session?.user?.name}</h1>
            <h1>{session?.user?.email}</h1>
          </div>
        }
      </main>
    </>
  )
}

export default Home