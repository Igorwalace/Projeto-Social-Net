import React from 'react'

//pages
import Header from './components/header'
import Home_Main from './home-main'

const Home = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <div className='mt-[72px] py-4 px-6 bg-gray-100'>
        <Home_Main />
      </div>
    </>
  )
}

export default Home