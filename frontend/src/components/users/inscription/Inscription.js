import React from "react";
import { useRef } from "react";
import "./Inscription.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Footer from "../../navbar/footer/Footer";
import Header from "../../navbar/header/Header";

export default function Inscription() {
	let username = useRef("");
	let password = useRef("");
	let email = useRef("");
	let Nom = useRef("");
	let Prenom = useRef("");
	let conf_password = useRef("");

	const refreshtoken = () => {
		let refresh = localStorage.getItem("refresh");
		axios
			.post("http://127.0.0.1:8000/api/token/refresh/", {
				refresh: refresh,
			})
			.then((res) => {
				console.log("refresh");
				localStorage.setItem("token", res.data.access);
				localStorage.setItem("refresh", res.data.refresh);
			});
	};

	let valider = () => {
		username.current.value == ""
			? username.current.classList.add("is-invalid")
			: username.current.classList.remove("is-invalid");
		password.current.value == ""
			? password.current.classList.add("is-invalid")
			: password.current.classList.remove("is-invalid");
		email.current.value == ""
			? email.current.classList.add("is-invalid")
			: email.current.classList.remove("is-invalid");
		Nom.current.value == ""
			? Nom.current.classList.add("is-invalid")
			: Nom.current.classList.remove("is-invalid");
		Prenom.current.value == ""
			? Prenom.current.classList.add("is-invalid")
			: Prenom.current.classList.remove("is-invalid");
		conf_password.current.value == ""
			? conf_password.current.classList.add("is-invalid")
			: conf_password.current.classList.remove("is-invalid");
		if (
			username.current.value != "" &&
			password.current.value != "" &&
			email.current.value != "" &&
			Nom.current.value != "" &&
			Prenom.current.value != "" &&
			conf_password.current.value != ""
		) {
			if (password.current.value == conf_password.current.value) {
				let data = {
					username: username.current.value,
					email: email.current.value,
					password: password.current.value,
					first_name: Nom.current.value,
					last_name: Prenom.current.value,
				};
				if (jwt_decode(localStorage.getItem("token")).username != "admin") {
					alert("Vous n'êtes pas autorisé à faire cette action");
					window.location.href = "/";
				}
				refreshtoken();
				axios
					.post("http://localhost:8000/api/register/", data)
					.then((res) => {
						console.log(res);
						window.location.replace("/ValidationIns");
					})
					.catch((err) => {
						console.log(err);
						alert("Erreur d'inscription");
						if (err.response.data.password) {
							alert(err.response.data.password);
						}
						if (err.response.data.username) {
							alert(err.response.data.username);
						}
					});
			} else {
				alert("Les mots de passe ne correspondent pas");
			}
		}
	};

	return (
		<div className="container-fluid ins-intro__bg">
			<Header />
			<div className="col-lg-4 offset-lg-1 mt-5">
				<img src={require("../../../images/logo.png")} className="logoI"></img>
			</div>
			<div className="col-lg-4 offset-lg-1 px-5 mt-5">
				<input
					ref={Nom}
					className="form-control"
					type="text"
					placeholder="Nom"
				></input>
				<div className="invalid-feedback">* Please choose a Nom.</div>
			</div>
			<div className="col-lg-4 offset-lg-1 px-5 mt-3">
				<input
					ref={Prenom}
					className="form-control"
					type="text"
					placeholder="Prenom"
				></input>
				<div className="invalid-feedback">* Please choose a Prenom.</div>
			</div>
			<div className="col-lg-4 offset-lg-1 px-5 mt-3">
				<input
					ref={username}
					className="form-control"
					type="username"
					placeholder="Username"
				></input>
				<div className="invalid-feedback">* Please choose a username.</div>
			</div>
			<div className="col-lg-4 offset-lg-1 px-5 mt-3">
				<input
					ref={email}
					className="form-control"
					type="email"
					placeholder="Email"
				></input>
				<div className="invalid-feedback">* Please choose a email.</div>
			</div>
			<div className="col-lg-4 offset-lg-1 px-5 mt-3">
				<input
					ref={password}
					className="form-control"
					type="password"
					placeholder="Mot de passe"
				></input>
				<div className="invalid-feedback">* Please choose a Password.</div>
			</div>
			<div className="col-lg-4 offset-lg-1 px-5 mt-3">
				<input
					ref={conf_password}
					className="form-control"
					type="password"
					placeholder="Confirmer mot de passe"
				></input>
				<div className="invalid-feedback">* Please choose a Password.</div>
			</div>

			<div className="col-lg-4 offset-lg-1">
				<button onClick={() => valider()} className="btn btn-dark start">
					Valider
				</button>
			</div>
			<div className="mt-5">
				<Footer />
			</div>
		</div>
	);
}
