import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';


export default function Auth() {
  let username = useRef('')
  let password = useRef('')
  let valider = () => {
    username.current.value == '' ? username.current.classList.add('is-invalid') : username.current.classList.remove('is-invalid')
    password.current.value == '' ? password.current.classList.add('is-invalid') : password.current.classList.remove('is-invalid')
    if (username.current.value != '' && password.current.value != '') {
      axios.post('http://localhost:8000/api/token/', {
        username: username.current.value,
        password: password.current.value
      }).then(res => {
        localStorage.setItem('token', res.data.access)
        window.location.href = '/reservation'
      }).catch(err => {
        console.log(err)
      })
    }
  }
  return (
    <div className='container-fluid'>
      <div className='col-lg-4 offset-lg-4'>
        <img src={require('../../../images/logo.png')} className='logo'></img>
      </div>
      <div className='col-lg-4 offset-lg-4 px-5 mt-5'><input ref={username} className='form-control' type='username' placeholder='username'></input>
        <div className='invalid-feedback'>* Please choose a username.</div>
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
