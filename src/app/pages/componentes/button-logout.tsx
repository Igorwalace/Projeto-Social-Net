'use client'

//react/next
import React from 'react'
import { signOut } from 'next-auth/react'

const Button_Logout = () => {
    
    return (
        <button
            onClick={ async () => {
                await signOut()
            }}
            className="w-full px-4 py-2 font-medium text-white bg-[var(--main)] rounded-md hover:scale-95 duration-200 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
            Logout
        </button>
    )
}

export default Button_Logout