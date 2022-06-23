import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function FormCon1() {
	const [results, setResults] = useState([0]);
	const [salles, setSalles] = useState("");
	const [data, setData] = useState("");

	let Amphi = useRef("");

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
		var filter = {
			Type: Amphi.current.value,
		};
		console.log(data);
		let rese = data.filter(
			(result) => result.Type.split(" ")[0] == filter.Type
		);
		let salles = [];
		let sallespourres = [];
		for (let salle of rese) {
			salles.push(salle.Type);
		}
		if (Amphi.current.value == "TD") {
			sallespourres = sallers1;
		} else if (Amphi.current.value == "Amphi") {
			sallespourres = sallers2;
		} else if (Amphi.current.value == "SM") {
			sallespourres = sallers3;
		}
		setResults(
			sallespourres.map((result) => (
				<a
					href={"/Consulter1#"+result}
					className="list-group-item list-group-item-action"
				>
					{result}
				</a>
			))
		);
		setSalles(Amphi.current.value);
	};

	return (
		<div>
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
				<div className="list-group">{showres()}</div>
			</div>
		</div>
	);
}
