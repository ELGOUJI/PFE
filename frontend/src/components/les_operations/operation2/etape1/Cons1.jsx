import React from 'react'
import Footer from '../../../navbar/footer/Footer'
import Header from '../../../navbar/header/Header'
import FormCon1 from './body/FormCon1'
import './Const1.css'


export default function Cons1() {
  return (
    <div className='const-intro__bg'>
      <Header/>
      <div className="col-lg-4 offset-lg-1 mt-5 cadr">
        <div className="type mt-5">
          <FormCon1/>
        </div>
      </div>
      <div className='ft-b'>
        <Footer/>
      </div>
    </div>
  )
}
