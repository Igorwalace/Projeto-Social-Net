import React from 'react'

//pages
import Header from './components/header'
import Home_Main from './home-main'
import Footer_Mobile from './components/footer-mobile'

const Home = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <div className='mt-[72px] md:py-4 md:px-6 bg-gray-100 w-full'>
        <Home_Main />
      </div>
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50">
        <Footer_Mobile />
      </div>
    </>
  )
}

export default Home