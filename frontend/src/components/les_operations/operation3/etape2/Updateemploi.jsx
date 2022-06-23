import React from 'react'
import Footer from '../../../navbar/footer/Footer'
import Header from '../../../navbar/header/Header'
import Up from './body/Up'

export default function Updateemploi() {
  return (
    <div>
      <Header/>
      <div className="col-lg-4 offset-lg-4 mt-5 cadr">
        <div className="type mt-5">
          <Up/>
        </div>
      </div>
      <div className='ft-b'>
        <Footer/>
      </div>
    </div>
  )
}
