import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";

export default function Form1() {
	const [results, setResults] = useState("");
	const [salles, setSalles] = useState("");
	const [data, setData] = useState("");

	let Amphi = useRef("");
	let temp = useRef("");
	let date = useRef("");
	let com = useRef("");
	let titres = useRef("");

	const sallers1 = ["TD 1", "TD 2", "TD 3", "TD 4", "TD 5", "TD 6", "TD 7"];
	const sallers2 = [
		"Amphi 1",
		"Amphi 2",
		"Amphi 3",
		"Amphi 4",
		"Amphi 5",
		"Amphi 6",
		"Amphi 7",
	];
	const sallers3 = ["SM 1", "SM 2", "SM 3", "SM 4", "SM 5", "SM 6", "SM 7"];

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

	useEffect(() => {
		refreshtoken();
		let getdata = async () => {
			var token = localStorage.getItem("token");
			let res = await axios.get("http://localhost:8000/api/reservation", {
				headers: {
					Authorization: "Bearer " + token,
				},
			});

			setData(res.data);
		};
		getdata();
	}, []);

	let showres = () => {
		if (salles !== "") {
			return (
				<div className="list-group">
					<a class="list-group-item list-group-item-action list-group-item-dark active">
						{salles}
					</a>
					{results}
				</div>
			);
		}
	};

	let cherche = () => {
		const dateRES = date.current.value === "" ? new Date() : date.current.value;
		let dateRESString = null;
		try {
			dateRESString = dateRES.toISOString().split("T")[0];
		} catch (e) {
			dateRESString = dateRES;
		}

		var filter = {
			dataRES: dateRESString,
			Type: Amphi.current.value,
			Houre: temp.current.value,
		};

		// get all data with the same date and type and hour
		let reservedTypes = [];
		data.forEach((element) => {
			if (
				element.Type.split(" ")[0] === filter.Type &&
				element.dateRES === filter.dataRES &&
				element.Houre === filter.Houre
			) {
				reservedTypes.push(element.Type);
			}
		});

		console.log(reservedTypes);

		// delete reserved types from the list of salles
		if (reservedTypes.length > 0) {
			sallers1.forEach((element) => {
				if (reservedTypes.includes(element)) {
					sallers1.splice(sallers1.indexOf(element), 1);
				}
			});
			sallers2.forEach((element) => {
				if (reservedTypes.includes(element)) {
					sallers2.splice(sallers2.indexOf(element), 1);
				}
			});
			sallers3.forEach((element) => {
				if (reservedTypes.includes(element)) {
					sallers3.splice(sallers3.indexOf(element), 1);
				}
			});
		}
		let sallespourres = [];
		if (Amphi.current.value === "TD") {
			sallespourres = sallers1;
		}
		if (Amphi.current.value === "Amphi") {
			sallespourres = sallers2;
		}
		if (Amphi.current.value === "SM") {
			sallespourres = sallers3;
		}

		let Valid = (event) => {
			const dateRES =
				date.current.value === "" ? new Date() : date.current.value;
			// convert dateRES to YYYY-MM-DD
			const dateRESString = dateRES;
			try {
				dateRESString =
					dateRES.getFullYear() +
					"-" +
					(dateRES.getMonth() + 1) +
					"-" +
					dateRES.getDate();
			} catch (e) {
				console.log(dateRES);
			}
			const idU = jwt_decode(localStorage.getItem("token")).user_id;
			const Houre = temp.current.value;
			// get text of clicked item
			const Type = event.target.innerText;
			const Titre = titres.current.value;
			console.log(dateRESString, idU, Houre, Type);
			const data = {
				dateRES: dateRESString,
				idU: idU,
				Houre: Houre,
				Type: Type,
				titre: Titre,
			};

			axios
				.post("http://127.0.0.1:8000/api/reservation", data, {
					headers: {
						Authorization: "Bearer " + localStorage.getItem("token"),
						"Content-Type": "application/json",
					},
				})
				.then((res) => {
					console.log(res);
					// redirect to "/reservation"
					window.location.href = "/validation";
				})
				.catch((err) => {
					console.log(err);
					alert("saisir date");
				});
		};

		setResults(
			sallespourres.map((result) => (
				<a
					onClick={(event) => Valid(event)}
					ref={com}
					className="list-group-item list-group-item-action"
				>
					{result}
				</a>
			))
		);
		setSalles(Amphi.current.value);
	};

	return (
		<>
			<div>
				<div className="form-group row">
					<label for="inputusername3" className="col-sm-2 col-form-label">
						Date
					</label>
					<div className="col-sm-10">
						<input
							ref={date}
							type="Date"
							className="form-control"
							id="inputusername3"
							placeholder="username"
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
							<option value={"S3"}>12:00 - 13:30</option>
							<option value={"S4"}>13:45 - 15:15</option>
							<option value={"S5"}>15:30 - 17:00</option>
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
							<option>TD</option>
							<option>SM</option>
						</select>
					</div>
				</div>
				<div className="form-group row mt-4">
					<label for="inputPassword3" className="col-sm-2 col-form-label">
						Titre
					</label>
					<div className="col-sm-10">
						<input className="form-control" ref={titres} type="text"></input>
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
				<div className="col-lg-10 offset-lg-2 mt-5">{showres()}</div>
			</div>
		</>
	);
}
