import React from 'react'

const Loading = () => {
    return (
        <>
            <main className='fixed z-50 -top-10 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-center' >
                <span className="loader"></span>
            </main>
        </>
    )
}

export default Loading