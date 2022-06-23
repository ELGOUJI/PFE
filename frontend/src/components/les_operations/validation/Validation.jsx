import React from 'react'
import img from '../../../images/valid.avif'
import Header from '../../navbar/header/Header'
import './Validation.css'

export default function Validation() {
  return (
    <div>
        <Header/>
        <img src={img} className="rounded mx-auto d-block validat" width='100px' height='100px' alt=''></img>
        <h1 className="Validation" >la réservation est réussie</h1>
    </div>
  )
}
