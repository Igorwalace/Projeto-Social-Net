import React from 'react'

//shadcn
import Messages_Single from './messages-single'

const Messages = async () => {

    return (
        <aside className="fixed top-[92px] right-5 bottom-5 w-80 bg-white dark:bg-gray-800 rounded-xl p-6 overflow-y-auto scrollbar-none">
            <h2 className="text-lg font-medium mb-4">Messages</h2>
            <div className="space-y-4 text-center">
                Em breve!
            </div>
        </aside>
    )
}

export default Messages