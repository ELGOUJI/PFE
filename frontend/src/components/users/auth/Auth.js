import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Auth.css'
import { useRef } from 'react';
import axios from 'axios';


export default function Auth() {
  let username = useRef('')
  let password = useRef('')
  let valider = () => {
    let res=0;
    if( username.current.value === ''){
      username.current.classList.add('is-invalid')
    }else{
      username.current.classList.remove('is-invalid')
      res++;
    }
    
    if( password.current.value === ''){
      password.current.classList.add('is-invalid')
    }else{
      password.current.classList.remove('is-invalid')
      res++;
    }

    if(res === 2){
      if (username.current.value !== '' && password.current.value !== '') {
        axios.post('http://localhost:8000/api/token/', {
          username: username.current.value,
          password: password.current.value
        }).then(res => {
          localStorage.setItem('token', res.data.access)
          window.location.href = '/reservation'
        }).catch(err => {
          window.location.href = '/authentification'
        })
      }
    }
    
    
  }
  return (
    <div className='container-fluid'>
      <div className='col-lg-4 offset-lg-4'>
        <img src={require('../../../images/logo.png')} className='logo'></img>
        <div className='invalid-feedback'>* NOT Exist</div>
      </div>
      <div className='col-lg-4 offset-lg-4 px-5 mt-5'><input ref={username} className='form-control' type='username' placeholder='username'></input>
        <div className='invalid-feedback'>* Please choose a username.</div>
      </div>
      <div className='col-lg-4 offset-lg-4 px-5 mt-3'><input ref={password} className='form-control' type='password' placeholder='Mot de pass'></input>
        <div className='invalid-feedback'>* Please choose a Password.</div>
      </div>
      <div className='col-lg-4 offset-lg-4'><button onClick={() => valider()} className='btn btn-dark start'>Connecter</button></div>
      <div className='col-lg-4 offset-lg-4 mt-3'><a href='/ResetPassword' className='reset'>Mot de passe oublié ?</a></div>
    </div>
  )
}