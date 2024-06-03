'use client'

//react/next
import { signIn } from 'next-auth/react'
import React from 'react'

const Button_Login = () => {

    return (
        <button
            onClick={()=>signIn()}
            className="w-full px-4 py-2 font-medium text-white bg-[var(--main)] rounded-md hover:scale-95 duration-200 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
            Sign In with Google
        </button>
    )
}

export default Button_Login