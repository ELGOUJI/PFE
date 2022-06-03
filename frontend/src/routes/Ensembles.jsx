import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Emploi from '../components/les_operations/operation3/etape1/Emploi'
import Authentification from '../pages/Authentification'
import PageConsuler from '../pages/PageConsuler'
import PageConsulter2 from '../pages/PageConsulter2'
import PageErreur from '../pages/PageErreur'
import PageInscription from '../pages/PageInscription'
import PageProfile from '../pages/PageProfile'
import PageReservation from '../pages/PageReservation'
import PageReservation1 from '../pages/PageReservation1'
import ResetPassword from '../pages/ResetPassword'

export default function Ensembles() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Authentification/>} ></Route>
            <Route path="/Authentification" element={<Authentification/>} ></Route>
            <Route path="/Inscription" element={<PageInscription/>} ></Route>
            <Route path="/Emploi" element={<Emploi/>} ></Route>
            <Route path="/Consulter" element={<PageConsuler/>} ></Route>
            <Route path="/Consulter1" element={<PageConsulter2/>} ></Route>
            <Route path="/Reservation" element={<PageReservation/>} ></Route>
            <Route path="/Profile" element={<PageProfile/>} ></Route>
            <Route path="/Reservation1" element={<PageReservation1/>} ></Route>
            <Route path="/ResetPassword" element={<ResetPassword/>} ></Route>
            <Route path="/Erreur" element={<PageErreur/>} ></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
