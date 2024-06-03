'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

const Page_Sign_In = () => {
  return (
    <button onClick={()=>signIn()} >Sign in</button>
  )
}

export default Page_Sign_In