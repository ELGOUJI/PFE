import React from 'react'
import img from '../../../images/valid.avif'
import Header from '../../navbar/header/Header'
import './Validation.css'

export default function Validation() {
  return (
    <div>
        <Header/>
        <img src={img} className="rounded mx-auto d-block mt-5" width='300px' height='300px' alt=''></img>
        <h1 className="Validation" >command is valide !!!</h1>
    </div>
  )
}
