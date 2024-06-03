import React from 'react'
import Page_Sign_In from './componentes/page-sign-in'

const Home = () => {
  return (
    <>
      <main className="mt-4 flex items-center justify-center gap-3 flex-col">
        <h1>Aqui é minha home.</h1>
        <Page_Sign_In />
      </main>
    </>
  )
}

export default Home