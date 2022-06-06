import React from "react";
import "./Header.css";
import jwt_decode from "jwt-decode"


export default function Header() {
  const deconn = () => {
    localStorage.clear();
    window.location.href = '/';
  }


  return (
    <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <div className="col-lg-2">
          <img
            src={require("../../../images/logo.png")}
            height="60px"
            width="150px"
          />
        </div>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/Reservation" className="nav-link px-2 link-secondary">Réservation</a></li>
          <li><a href="/Consulter" className="nav-link px-2 link-dark">Consulter l'agenda</a></li>
          <li><a href="/Emploi" className="nav-link px-2 link-dark">Emploi du temps</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
        </ul>
          <div className="username"><h5>{jwt_decode(localStorage.getItem("token")).username}</h5></div>
        <div className="dropdown text-end">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="50" height="50" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="/Profile">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href='#' onClick = {() => deconn()} >Se déconnecter</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  );
}
