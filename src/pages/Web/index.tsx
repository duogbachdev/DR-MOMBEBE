import React from 'react'
import Footer from '~/components/Web/Footer/Footer'
import Header from '~/components/Web/Header/Header'

const HomePage = () => {
  return (
    <div className='bg-slate-500'>
      <Header />

      <p className='border-blue-400 border-b-2'>Main</p>

      <Footer />
    </div>
  )
}

export default HomePage
