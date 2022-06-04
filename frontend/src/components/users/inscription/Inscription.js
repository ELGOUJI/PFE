import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Inscription.css";

export default function Inscription() {
  let username = useRef("");
  let password = useRef("");
  let Nom = useRef("");
  let Prenom = useRef("");
  let Fillier = useRef("");

  let valider = () => {
    username.current.value == ""
      ? username.current.classList.add("is-invalid")
      : username.current.classList.remove("is-invalid");
    password.current.value == ""
      ? password.current.classList.add("is-invalid")
      : password.current.classList.remove("is-invalid");
    Nom.current.value == ""
      ? Nom.current.classList.add("is-invalid")
      : Nom.current.classList.remove("is-invalid");
    Prenom.current.value == ""
      ? Prenom.current.classList.add("is-invalid")
      : Prenom.current.classList.remove("is-invalid");
    Fillier.current.value == ""
      ? Fillier.current.classList.add("is-invalid")
      : Fillier.current.classList.remove("is-invalid");
  };
  return (
    <div className="container-fluid">
      <div className="col-lg-4 offset-lg-4">
        <img src={require("../../../images/logo.png")} className="logoI"></img>
      </div>
      <div className="col-lg-4 offset-lg-4 px-5 mt-5">
        <input
          ref={Nom}
          className="form-control"
          type="text"
          placeholder="Nom"
        ></input>
        <div className="invalid-feedback">* Please choose a Nom.</div>
      </div>
      <div className="col-lg-4 offset-lg-4 px-5 mt-3">
        <input
          ref={Prenom}
          className="form-control"
          type="text"
          placeholder="Prenom"
        ></input>
        <div className="invalid-feedback">* Please choose a Prenom.</div>
      </div>
      <div className="col-lg-4 offset-lg-4 px-5 mt-3">
        <input
          ref={Fillier}
          className="form-control"
          type="text"
          placeholder="Filliér"
        ></input>
        <div className="invalid-feedback">* Please choose a Filliér.</div>
      </div>
      <div className="col-lg-4 offset-lg-4 px-5 mt-3">
        <input
          ref={username}
          className="form-control"
          type="username"
          placeholder="username"
        ></input>
        <div className="invalid-feedback">* Please choose a username.</div>
      </div>
      <div className="col-lg-4 offset-lg-4 px-5 mt-3">
        <input
          ref={password}
          className="form-control"
          type="password"
          placeholder="Mot de pass"
        ></input>
        <div className="invalid-feedback">* Please choose a Password.</div>
      </div>
      <div className="col-lg-4 offset-lg-4 mt-3 px-5">
        <div className="row">
          <div className="col-lg-2"> sexe :</div>
          <div className="col-lg-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" for="gridRadios1">
                Homme
              </label>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label" for="gridRadios2">
                Femme
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 offset-lg-4">
        <button onClick={() => valider()} className="btn btn-dark start">
          Submit
        </button>
      </div>
      <div className="col-lg-4 offset-lg-4">
        <p className="cprI">Copyrigth 2022 &copy | In Data Bee ...</p>
      </div>
    </div>
  );
}
