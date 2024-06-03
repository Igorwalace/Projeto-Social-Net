import React from 'react'

//pages
import Posts from './components/posts'
import Messages from './components/messages'

const Home_Main = async () => {

    return (
        <main className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex w-full">
                <Posts />
                <Messages />
            </div>
        </main>
    )
}

export default Home_Main