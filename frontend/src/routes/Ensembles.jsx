import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Emploi from '../components/les_operations/operation3/etape1/Emploi'
import Authentification from '../pages/Authentification'
import PageAccuille from '../pages/PageAccuille'
import PageConsuler from '../pages/PageConsuler'
import PageConsulter2 from '../pages/PageConsulter2'
import PageEchnager from '../pages/PageEchnager'
import PageErreur from '../pages/PageErreur'
import PageInscription from '../pages/PageInscription'
import PageMesreservation from '../pages/PageMesreservation'
import PageProfile from '../pages/PageProfile'
import PageReservation from '../pages/PageReservation'
import PageSupp from '../pages/PageSupp'
import PageValidation from '../pages/PageValidation'
import PageValidation1 from '../pages/PageValidation1'
import ResetPassword from '../pages/ResetPassword'

export default function Ensembles() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<PageAccuille/>} ></Route>
            <Route path="/Accuille" element={<PageAccuille/>} ></Route>
            <Route path="/Updateemploi" element={<PageEchnager/>} ></Route>
            <Route path="/SupprimerProf" element={<PageSupp/>} ></Route>
            <Route path="/MesReservation" element={<PageMesreservation/>} ></Route>
            <Route path="/Validation" element={<PageValidation/>} ></Route>
            <Route path="/ValidationIns" element={<PageValidation1/>} ></Route>
            <Route path="/Authentification" element={<Authentification/>} ></Route>
            <Route path="/Inscription" element={<PageInscription/>} ></Route>
            <Route path="/Emploi" element={<Emploi/>} ></Route>
            <Route path="/Consulter" element={<PageConsuler/>} ></Route>
            <Route path="/Consulter1" element={<PageConsulter2/>} ></Route>
            <Route path="/Reservation" element={<PageReservation/>} ></Route>
            <Route path="/Profile" element={<PageProfile/>} ></Route>
            <Route path="/ResetPassword" element={<ResetPassword/>} ></Route>
            <Route path="/Erreur" element={<PageErreur/>} ></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
