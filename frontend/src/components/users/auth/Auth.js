import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';


export default function Auth() {
  let email = useRef('')
  let password = useRef('')
  let valider = () => {
    email.current.value == '' ? email.current.classList.add('is-invalid') : email.current.classList.remove('is-invalid')
    password.current.value == '' ? password.current.classList.add('is-invalid') : password.current.classList.remove('is-invalid')
  }
  return (
    <div className='container-fluid'>
      <div className='col-lg-4 offset-lg-4'>
        <img src={require('../../../images/logo.png')} className='logo'></img>
      </div>
      <div className='col-lg-4 offset-lg-4 px-5 mt-5'><input ref={email} className='form-control' type='email' placeholder='Email'></input>
        <div className='invalid-feedback'>* Please choose a Email.</div>
      </div>
      <div className='col-lg-4 offset-lg-4 px-5 mt-3'><input ref={password} className='form-control' type='password' placeholder='Mot de pass'></input>
        <div className='invalid-feedback'>* Please choose a Password.</div>
      </div>
      <div className='col-lg-4 offset-lg-4'><button onClick={() => valider()} className='btn btn-dark start'>login</button></div>
      <div className='col-lg-4 offset-lg-4 mt-3'><Link className='reset' to={'/ResetPassword'}><a>Mot de passe oublié ?</a></Link></div>
      <div className='col-lg-4 offset-lg-4'><p className='cpr1'>Copyrigth 2022 &copy | In Data Bee ...</p></div>
    </div>
  )
}
