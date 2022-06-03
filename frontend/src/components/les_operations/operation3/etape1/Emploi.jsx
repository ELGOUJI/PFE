import React from 'react'
import Pdf from '../etape1/EMPLOI-DU-TEMPS-13.10.2021-3.pdf'

export default function Emploi() {
  return (
    <div>
        <iframe src={Pdf} height="712" width="100%"></iframe>
    </div>
  )
}
