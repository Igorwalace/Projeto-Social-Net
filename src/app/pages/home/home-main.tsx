import React from 'react'

//pages
import Posts from './components/posts'
import Messages from './components/messages'
import Menu_Left from './components/menu-left'

const Home_Main = async () => {
    return (
        <main className="flex items-center justify-between md:max-w-6xl mx-auto scrollbar-none">
            <div className="w-full">
                <div className="hidden md:block">
                    <Menu_Left />
                </div>
                <Posts />
                <div className="hidden md:block">
                    <Messages />
                </div>
            </div>
        </main>
    )
}

export default Home_Main