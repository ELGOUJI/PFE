import React from "react";
import "./Header.css";
import jwt_decode from "jwt-decode";

export default function Header() {
	const deconn = () => {
		localStorage.clear();
		window.location.href = "/";
	};

	const isaadmin = () => {
		if (jwt_decode(localStorage.getItem("token")).username === "admin") {
			return (
				<>
					<a className="dropdown-item" href="/inscription">
						Ajouter un professeur
					</a>
					<a className="dropdown-item" href="/SupprimerProf">
						Retirer un professeur
					</a>
					<a className="dropdown-item" href="http://127.0.0.1:8000/admin/">
						Modifier emploi du temps
					</a>
				</>
			);
		} else {
			return null;
		}
	};

	console.log(jwt_decode(localStorage.getItem("token")));

	return (
		<header className="p-3 mb-3 border-bottom header">
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
						<li>
							<a href="/Reservation" className="nav-link px-2 link-secondary ">
								Réservation
							</a>
						</li>
						<li>
							<a href="/Consulter" className="nav-link px-2 link-secondary ">
								Consulter l'agenda
							</a>
						</li>
						<li>
							<a
								href="/MesReservation"
								className="nav-link px-2 link-secondary "
							>
								Mes Réservations
							</a>
						</li>
						<li>
							<a href="/Emploi" className="nav-link px-2 link-secondary ">
								Emploi du temps
							</a>
						</li>
					</ul>
					<div className="username">
						<h5 className="Name ">
							Bonjour {jwt_decode(localStorage.getItem("token")).username}
						</h5>
					</div>
					<div className="dropdown text-end">
						<a
							href="#"
							className="d-block link-dark text-decoration-none dropdown-toggle"
							id="dropdownUser1"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<img
								src="https://imgs.search.brave.com/CrcOeftKp-LJf3AiJJ5jLWQ9r0cJMA1Kw8QC4iBBT3Q/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4y/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvdXNlcnMtNi8x/MDAvVVNFUjctNTEy/LnBuZw"
								alt="mdo"
								width="50"
								height="50"
								className="rounded-circle"
							/>
						</a>
						<ul
							className="dropdown-menu text-small"
							aria-labelledby="dropdownUser1"
						>
							{isaadmin()}
							<li>
								<hr className="dropdown-divider" />
							</li>
							<li>
								<a className="dropdown-item" href="#" onClick={() => deconn()}>
									Se déconnecter
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}
