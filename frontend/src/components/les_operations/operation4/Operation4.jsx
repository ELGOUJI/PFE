import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../navbar/footer/Footer";
import Header from "../../navbar/header/Header";
import jwt_decode from "jwt-decode";

export default function Operation4() {
	const [results, setResults] = useState("");
	const [salles, setSalles] = useState("");
	const [data, setData] = useState("");
	const [filterdata, setFilterdata] = useState("");

	const refreshtoken = () => {
		let refresh_item = localStorage.getItem("refresh");
		axios
			.post("http://localhost:8000/api/token/refresh/", {
				refresh: refresh_item,
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
			let filtered = [];
			try {
				res.data.forEach((ele) => {
					if (ele.idU === jwt_decode(localStorage.getItem("token")).user_id) {
						filtered.push(ele);
					}
				});
				console.log("This the data with foreach");
			} catch {
				console.log("This the data");
				console.log(data);
			}
			console.log(filtered.length);
			if (filtered.length === 0) {
				setFilterdata(
					<tr>
						<td colSpan={4}>Pas de reservations</td>
					</tr>
				);
			} else {
				setFilterdata(
					filtered.map((result) => (
						<tr>
							<td>{result.Type}</td>
							<td>{result.dateRES}</td>
							<td>{result.Houre}</td>
							<td>{result.titre}</td>
							<td>
								<a
									id={result.idR}
									onClick={onDelete}
									className="btn btn-sm btn-danger mx-2"
								>
									Supprimer
								</a>
								<a
									href="/Reservation"
									className="btn btn-sm btn-success mx-2"
								>
									Modifier
								</a>
							</td>
						</tr>
					))
				);
			}
		};
		getdata();
	}, []);

	const onDelete = (event) => {
		var token = localStorage.getItem("token");
		console.log("Gonna delete this shit");
		axios
			.delete(
				"http://localhost:8000/api/reservation/delete/" +
					event.currentTarget.id +
					"/",
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			)
			.then((res) => {
				console.log(res);
				window.location.href = "/MesReservation";
			});
	};

	return (
		<div className="">
			<Header />
			<div className="col-lg-8 offset-lg-2 mt-5 cadr">
				<div className="">
					{
						<table className="table table-striped table-hover table-sm">
							<thead>
								<tr className="table-dark">
									<th scope="col">Salle</th>
									<th scope="col">Date</th>
									<th scope="col">Séance</th>
									<th scope="col">Titre</th>
									<th scope="col">Action</th>
								</tr>
							</thead>
							<tbody>{filterdata}</tbody>
						</table>
					}
				</div>
			</div>
			<div className="">
				<Footer />
			</div>
		</div>
	);
}
