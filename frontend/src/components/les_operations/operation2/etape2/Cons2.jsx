import React from 'react'
import Header from '../../../navbar/header/Header'
import App from './body/Agenda.tsx'

export default function Cons2() {
  return (
    <div>
      <Header/>
      <div className="col-lg-10 offset-lg-1 mt-5">
        <div className="type mt-5">
          <App/>
        </div>
      </div>
    </div>
  )
}
