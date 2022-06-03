import axios from "axios";
import React, { useRef, useState } from "react";

export default function Form1() {
	const [datares, setDatares] = useState("");
	const [results, setResults] = useState([0]);
	const [reservation, setReservation] = useState([0]);
	const [salles, setSalles] = useState("");

	let Amphi = useRef("");
	let temp = useRef("");
	let date = useRef("");

	let cherche = async () => {
		const datas = (
			await axios.get("http://127.0.0.1:8000/api/salle", {
				responseType: "json ",
			})
		).data;

		const datar = (
			await axios.get("http://127.0.0.1:8000/api/reservation", {
				responseType: "json ",
			})
		).data;

		
		setDatares(datar.filter((result) => result.Houre !== temp.current.value));

		setResults(datas.filter((result) => result.Type === Amphi.current.value));

		setReservation(results.filter((result) => result.Type === datares.Houre))


		setSalles(reservation.map((salle)=>
		<a href="#" className="list-group-item list-group-item-action">
		{salle.Nom}</a>))

		console.log(reservation);
	};

	return (
		<div>
				<div className="form-group row">
					<label for="inputEmail3" className="col-sm-2 col-form-label">
						Date
					</label>
					<div className="col-sm-10">
						<input
							ref={date}
							type="Date"
							className="form-control"
							id="inputEmail3"
							placeholder="Email"
						/>
					</div>
				</div>
				<br />
				<div className="form-group row">
					<label for="inputPassword3" className="col-sm-2 col-form-label">
						Heurs
					</label>
					<div className="col-sm-10">
						<select className="form-control" ref={temp}>
							<option value={"S1"}>8:30 - 10:00</option>
							<option value={"S2"}>10:15 - 11:45</option>
							<option value={"S3"}>12:00 - 10:00</option>
							<option value={"S4"}>13:45 - 15:15</option>
							<option value={"S4"}>15:30 - 17:00</option>
						</select>
					</div>
				</div>
				<br />
				<div className="form-group row">
					<label for="inputPassword3" className="col-sm-2 col-form-label">
						Type
					</label>
					<div className="col-sm-10">
						<select className="form-control" ref={Amphi}>
							<option>Amphi</option>
							<option>Salles de TD</option>
							<option>Salles de Master</option>
						</select>
					</div>
				</div>
				<br />
				<div className="form-group row">
					<div className="col-sm-10">
						<button
							type="button"
							className="btn btn-outline-dark w-100 cherche"
							onClick={() => cherche()}
						>
							Cherche
						</button>
					</div>
				</div>
			<div className="col-lg-10 offset-lg-2 mt-5">
				<div className="list-group">
					<a
						href="#"
						className="list-group-item list-group-item-dark list-group-item-action active"
						aria-current="true"
					>
						{Amphi.current.value}
					</a>
					{salles}
				</div>
			</div>
		</div>
	);
}
