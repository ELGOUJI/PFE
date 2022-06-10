import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode"

export default function Form1() {
	const [results, setResults] = useState("");
	const [salles, setSalles] = useState("");
	const [data, setData] = useState("");
	
	let Amphi = useRef("");
	let temp = useRef("");
	let date = useRef("");
	let com = useRef("");

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

	useEffect(() => {
		let getdata = async () => {
			var token = localStorage.getItem("token");
			console.log(token);
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
				<a class="list-group-item list-group-item-action list-group-item-dark active" >{salles}</a>
				{results}
				</div>
			);
		}
	};

	let cherche = () => {
		
		var filter = {
			dataRES: date.current.value === "" ? new Date() : date.current.value,
			Type: Amphi.current.value,
			Houre: temp.current.value,
		};
		let rese = data.filter(
			(result) =>
				result.Type.split(" ")[0] === filter.Type &&
				result.Houre === filter.Houre &&
				result.dateRES !==   filter.dateRES
		);
		let salles = [];
		let sallespourres = [];
		for (let salle of rese) {
			salles.push(salle.Type);
		}
		if (Amphi.current.value === "TD") {
			for (let x of sallers1) {
				if (!salles.includes(x)) {
					sallespourres.push(x);
				}
			}
		} else if (Amphi.current.value === "Amphi") {
			for (let x of sallers2) {
				if (!salles.includes(x)) {
					sallespourres.push(x);
				}
			}
		} else if (Amphi.current.value === "SM") {
			for (let x of sallers3) {
				if (!salles.includes(x)) {
					sallespourres.push(x);
				}
			}
		}
		let Valid =()=>{
					const data = `{"dateRES": "${date.current.value}","idU": "${jwt_decode(localStorage.getItem("token")).id}","Houre": "${temp.current.value}","Type": "${Amphi.current.value }"}`
					axios.post('http://127.0.0.1:8000/api/reservation', data,  {headers: {
						'Content-Type': 'application/json; charset=UTF-8'}
					  }).then((response) => {
						alert("Mail bien envoye")
					  });
					}

		setResults(sallespourres.map((result)=>
		<a href="/Validation" onClick={()=>Valid()} ref={com} className="list-group-item list-group-item-action">
		{result}
	    </a>
		))
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
					{showres()}
				</div>
			</div>
		</>
	);
}
