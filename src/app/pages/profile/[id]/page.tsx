import React from 'react'

//pages
import Header from '../../home/components/header'
import Profile_Home from '../profile-home'
import Footer_Mobile from '../../home/components/footer-mobile'

interface ProfileId {
    params: {
        id: string
    }
}

const Profile = ({ params: { id } }: ProfileId) => {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-40">
                <Header />
            </div>
            <div className='mt-[56px] md:mt-[79px] md:py-4 md:px-6 bg-gray-100 min-h-screen w-full md:mb-0 mb-[56px]'>
                <Profile_Home profileId={id} />
            </div>
            <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40">
                <Footer_Mobile />
            </div>
        </>
    )
}

export default Profile