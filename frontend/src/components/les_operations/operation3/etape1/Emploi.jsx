import React from 'react'
import Header from '../../../navbar/header/Header'
import Pdf from '../etape1/EMPLOI-S4-ET-S6-COURS-ET-TD..pdf'

export default function Emploi() {
  return (
    <div>
      <Header/>
        <iframe src={Pdf} height="712" width="100%"></iframe>
    </div>
  )
}
