'use client'
import React, { useState } from 'react'
import createAccount from './componente-create-server/create-user'
import { useRouter } from 'next/navigation'
import Loading from '../componentes/loading'

const Create_User = () => {
  const router = useRouter()

  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setLoading(true)
    await createAccount(userName)
    setLoading(false)
    router.push('/')
  }

  return (
    <>
      <main>
        <h1>Crie seu user name</h1>
        <form onSubmit={handleSubmit} >
          <input type="text" className='border-2 border-blue-900' onChange={(e)=>setUserName(e.target.value)} />
          <button type="submit">Enviar</button>
        </form>
      </main>
      {
        loading && <Loading />
      }
    </>
  )
}

export default Create_User