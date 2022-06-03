import React from 'react'
import Header from '../../../navbar/header/Header'
import FormCon1 from './body/FormCon1'


export default function Cons1() {
  return (
    <div>
      <Header/>
      <div className="col-lg-5 offset-lg-3 mt-5 cadr">
        <div className="type mt-5">
          <FormCon1/>
        </div>
      </div>
    </div>
  )
}
