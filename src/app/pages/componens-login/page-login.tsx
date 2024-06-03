// react
import React from 'react'

//pages
import Button_Login from '../componentes/button-login'

const Sign_Up = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-200 dark:bg-gray-900">
                <div className="md:w-full w-[90%] md:h-5/6 h-4/6 max-w-md p-6 bg-white rounded-xl shadow-md dark:bg-gray-800 flex items-center justify-center">
                    <div className="space-y-8">
                        <div className="text-center">
                            <h1 className="text-2xl font-extrabold">Welcome!</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-base">Sign in to your account using Google.</p>
                        </div>
                        <Button_Login />
                        <div className="text-center">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {`Sign in even if you don't have an account`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sign_Up 