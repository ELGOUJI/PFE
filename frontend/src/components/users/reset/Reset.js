import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reset.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function Reset() {
    let Envoiyer = useRef('')
    let envy = () => {
        Envoiyer.current.value == '' ? Envoiyer.current.classList.add('is-invalid') : Envoiyer.current.classList.remove('is-invalid')
    }
    return (
        <div className='container-fluid'>
            <div className='col-lg-4 offset-lg-4'>
                <img src={require('../../../images/logo.png')} className='logo'></img>
            </div>
            <div className='col-lg-4 offset-lg-4 px-5 mt-5'><input ref={Envoiyer} className='form-control' type='username' placeholder='username'></input>
                <div className='invalid-feedback'>* Please choose a username.</div>
            </div>
            <div className='col-lg-4 offset-lg-4'><button onClick={() => envy()} className='btn btn-dark start'>Envoyer</button></div>
            <div className='col-lg-4 offset-lg-4 mt-3'><Link className='annuler' to={'/authentification'}><a> Annuler</a></Link></div>
        </div>
    )
}
