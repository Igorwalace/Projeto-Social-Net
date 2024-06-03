'use client'

//react/next
import { signOut } from 'next-auth/react'
import React, { useState } from 'react'

//pages
import Loading from './loading'

const Button_Logout = () => {
    const [loading, setLoading] = useState<boolean>(false)

    const handleLogin = async () => {
        setLoading(true)
        try {
            await signOut()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <button onClick={handleLogin}
                className={`w-full px-4 py-2 font-medium text-white rounded-md duration-200 dark:bg-blue-600 dark:hover:bg-blue-700 ${loading ? 'bg-slate-500 cursor-no-drop' : 'bg-[var(--main)] hover:scale-95'}`}
            >
                {
                    loading ? 'Loading' : 'Logout'
                }
            </button>
        </>
    )
}

export default Button_Logout