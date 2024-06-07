import React from 'react'

const Loading = () => {
    return (
        <>
            <main className='fixed z-40 -top-10 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.02)] flex items-end justify-end md:pb-5 md:pr-5 pr-5 pb-5' >
                <span className="loader"></span>
            </main>
        </>
    )
}

export default Loading