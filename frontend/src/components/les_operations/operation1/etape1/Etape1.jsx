import React, { useEffect, useState } from "react";
import "../etape1/Etape1.css";
import Form1 from "./body/Form1";
import Header from "../../../navbar/header/Header";
import Footer from "../../../navbar/footer/Footer";

export default function Etape1() {



  
  return (
    <div className="op1-intro__bg">
      <Header />
      <div className="col-lg-4 offset-lg-1 mt-5 cadr">
        <div className="type">
          <Form1 />
        </div>
      </div>
      <div className="ft-t">
        <Footer/>
      </div>
    </div>
  );
}
