import React from 'react'
import img from '../../../images/valid.avif'
import Header from '../../navbar/header/Header'
import './Validation.css'

export default function Validation1() {
  return (
    <div>
        <Header/>
        <img src={img} className="rounded mx-auto d-block validat" width='100px' height='100px' alt=''></img>
        <h1 className="Validation1" >professeur ajouté</h1>
    </div>
  )
}
