import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header1() {
	return (
		<div className="container">
			<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
				<a
					href="/"
					className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
				>
					<img
						className="bi me-2"
						width="150"
						height="50"
						role="img"
						aria-label="Bootstrap"
						src={require('../../../images/logo.png')}
					/>
					
				</a>

				<ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
					
				</ul>

				<div className="col-md-3 text-end">
					<button type="button" className="btn btn-outline-primary me-2">
					<a href="/Authentification">se connecter</a>
					</button>
					
				</div>
			</header>
		</div>
	);
}
