import React, { useEffect, useState } from "react";
import axios from "axios";
import "../etape1/Etape1.css";
import Form1 from "./body/Form1";
import Header from "../../../navbar/header/Header";
import Spinner from "../../../navbar/body/Spinner";

export default function Etape1() {



  
  return (
    <div>
      <Header />
      <div className="col-lg-5 offset-lg-3 mt-5 cadr">
        <div className="type">
          <Form1 />
        </div>
      </div>
    </div>
  );
}
