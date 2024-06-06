import React from 'react'

//pages
import Header from '../home/components/header'
import Footer_Mobile from '../home/components/footer-mobile'
import Create_Post_Home from './create-post-home'

const Create_Post = () => {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-40">
                <Header />
            </div>
            <div className='mt-[48px] h-full md:mt-[79px] md:py-4 md:px-6 bg-gray-100 w-full md:mb-0 mb-[56px]'>
                <Create_Post_Home />
            </div>
            <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40">
                <Footer_Mobile />
            </div>
        </>
    )
}

export default Create_Post