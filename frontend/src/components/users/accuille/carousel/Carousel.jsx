import React from "react";
import "./Carousel.css";

export default function Carousel() {
	return (
		<div
			id="carouselExampleCaptions"
			className="carousel slide"
			data-bs-ride="false"
		>
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
			</div>
			<div className="carousel-inner">
				<div className=" carousel-item active">
					<img
						src={require("../../../../images/calendar.png")}
						height="550px"
						className="d-block w-50 bd-img"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5 className="text-dark">CONSULTATION</h5>
						<p className="text-dark">
							Superviser les états des salles à temps réel
						</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src={require("../../../../images/calendar1.jpg")}
						height="550px"
						className="d-block w-50 bd-img"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5 className="text-dark">Second slide label</h5>
						<p className="text-dark">
							Some representative placeholder content for the second slide.
						</p>
					</div>
				</div>
				<div className="carousel-item">
					<img
						src={require("../../../../images/gif1.gif")}
						height="550px"
						className="d-block w-50 bd-img"
						alt="..."
					/>
					<div className="carousel-caption d-none d-md-block">
						<h5 className="text-dark">Third slide label</h5>
						<p className="text-dark">
							Some representative placeholder content for the third slide.
						</p>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleCaptions"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
}
