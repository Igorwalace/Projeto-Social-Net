import React from 'react'

//pages
import Menu_Left from '../home/components/menu-left'
import Messages from '../home/components/messages'
import Home from './componentes-create-post/home'

const Create_Post_Home = () => {

    return (
        <main className="flex items-center justify-between md:max-w-6xl mx-auto scrollbar-none">
            <div className="w-full">
                <div className="hidden md:block">
                    <Menu_Left />
                </div>
                <Home />
                <div className="hidden md:block">
                    <Messages />
                </div>
            </div>
        </main>
    )
}

export default Create_Post_Home