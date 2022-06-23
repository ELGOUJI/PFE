import axios from "axios";
import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Header from "../../navbar/header/Header";
import Footer from "../../navbar/footer/Footer";

export default function SuppProf() {
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
			let res = await axios.get("http://localhost:8000/api/users/", {
				headers: {
					Authorization: "Bearer " + token,
				},
			});

			setData(res.data);
			console.log(res.data);
			let filtered = [];
			try {
				res.data.results.forEach((ele) => {
					if (ele.username !=="admin") {
					filtered.push(ele);
					}
				});
				console.log("This the data with foreach");
			} catch(error) {
				console.log("This the data");
				console.log(data);
				console.log(error);
			}
			console.log(filtered.length);
			if (filtered.length === 0) {
				setFilterdata(
					<tr>
						<td colSpan={6}>Pas d'utilisateurs</td>
					</tr>
				);
			} else {
				setFilterdata(
					filtered.map((result) => (
						<tr style={{width:"100%"}}>
							<td>{result.username}</td>
							<td>{result.email}</td>
							<td>{result.first_name}</td>
							<td>{result.last_name}</td>
							<td>
								<a
									id={result.username}
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
				"http://localhost:8000/api/users/delete/" +
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
				window.location.href = "/SupprimerProf";
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
									<th scope="col">username</th>
									<th scope="col">Nom</th>
									<th scope="col">Prenom</th>
									<th scope="col">Email</th>
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
