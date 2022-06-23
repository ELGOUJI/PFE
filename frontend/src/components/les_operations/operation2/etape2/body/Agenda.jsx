import React from "react";
import './Agenda.css'
import { useEffect, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { date } from "faker/lib/locales/az";


export default function Agenda() {
	// get what's after the # in the url
	const salle = window.location.hash.substring(1).replace("%20", " ");
	const [title, setTitle] = useState(salle);
	const [week, setWeek] = useState(-1);
	const [reserved_lundi, setReserved_lundi] = useState(["", "", "", "", ""]);
	const [reserved_mardi, setReserved_mardi] = useState(["", "", "", "", ""]);
	const [reserved_mercredi, setReserved_mercredi] = useState(["", "", "", "", ""]);
	const [reserved_jeudi, setReserved_jeudi] = useState(["", "", "", "", ""]);
	const [reserved_vendredi, setReserved_vendredi] = useState(["", "", "", "", ""]);
	const [reserved_samedi, setReserved_samedi] = useState(["", "", "", "", ""]);
	const [thetarget, setThetarget] = useState(0);
	if (!localStorage.getItem("token")) {
		alert("Vous devez vous connecter pour accéder à cette page");
		window.location.href = "/";
	}
	const refreshtoken = () => {
		let refresh_item = localStorage.getItem("refresh");
		axios
			.post("http://localhost:8000/api/token/refresh/", {
				refresh: refresh_item,
			})
			.then((res) => {

				localStorage.setItem("token", res.data.access);
				localStorage.setItem("refresh", res.data.refresh);
			});
	};

	const getDay = (day) => {
		let day1 = day.getDay();
		switch (day1) {
			case 0:
				return "dimanche";
			case 1:
				return "lundi";
			case 2:
				return "mardi";
			case 3:
				return "mercredi";
			case 4:
				return "jeudi";
			case 5:
				return "vendredi";
			case 6:
				return "samedi";
		}
	}
	const WhatWeek = (date) => {

		var mondayofthisweek = new Date();
		mondayofthisweek.setDate(mondayofthisweek.getDate() - mondayofthisweek.getDay() + 1);
		var sundayofthisweek = new Date();
		sundayofthisweek.setDate(sundayofthisweek.getDate() - sundayofthisweek.getDay() + 6);
		var mondayofnextweek = new Date();
		mondayofnextweek.setDate(mondayofnextweek.getDate() - mondayofnextweek.getDay() + 8);
		var sundayofnextweek = new Date();
		sundayofnextweek.setDate(sundayofnextweek.getDate() - sundayofnextweek.getDay() + 13);
		var mondayofnextnextweek = new Date();
		mondayofnextnextweek.setDate(mondayofnextnextweek.getDate() - mondayofnextnextweek.getDay() + 15);
		var sundayofnextnextweek = new Date();
		sundayofnextnextweek.setDate(sundayofnextnextweek.getDate() - sundayofnextnextweek.getDay() + 20);
		if (date >= mondayofthisweek && date <= sundayofthisweek) {
			return 0;
		}
		else if (date >= mondayofnextweek && date <= sundayofnextweek) {
			return 1;
		}
		else if (date >= mondayofnextnextweek && date <= sundayofnextnextweek) {
			return 2;
		}
		else {
			return -1;
		}
	}
	const changetarget = (target) => {
		setThetarget(target);
		setReserved_jeudi(["", "", "", "", ""]);
		setReserved_vendredi(["", "", "", "", ""]);
		setReserved_samedi(["", "", "", "", ""]);
		setReserved_lundi(["", "", "", "", ""]);
		setReserved_mardi(["", "", "", "", ""]);
		setReserved_mercredi(["", "", "", "", ""]);
	}

	useEffect(() => {
		refreshtoken();
		let getdata = async () => {
			var token = localStorage.getItem("token");
			let res = await axios.get("http://localhost:8000/api/reservation", {
				headers: {
					Authorization: "Bearer " + token,
				},
			});
			let data = res.data;
			
			let reserved = [];
			if (data.length > 0) {
				data.forEach(element => {
					console.log(new Date(element.dateRES));
					if (element.idU === jwt_decode(token).user_id && element.Type === title) {
						reserved.push(element);
					}
				})
				console.log(reserved);
			}

			if (reserved.length > 0) {

				reserved.forEach(element => {
					let res_lundi = reserved_lundi;
					let res_mardi = reserved_mardi;
					let res_mercredi = reserved_mercredi;
					let res_jeudi = reserved_jeudi;
					let res_vendredi = reserved_vendredi;
					let res_samedi = reserved_samedi;

					let date = new Date(element.dateRES);
					// check if the date is in this week
					if (WhatWeek(date) != -1) {

						let index = element.Houre.substring(1, 2);

						index = parseInt(index);
						setWeek(WhatWeek(date));
						console.log(WhatWeek(date));
						console.log("start")
						console.log(thetarget);
						console.log(WhatWeek(date));
						console.log("end");
						if (WhatWeek(date) == thetarget) {
							console.log("ok");
							const day = getDay(date);
							console.log(day);
							switch (day) {
								case "lundi":
									res_lundi[index-1] = "reserved";
									break;
								case "mardi":
									res_mardi[index-1] = "reserved";
									break;
								case "mercredi":
									res_mercredi[index-1] = "reserved";
									break;
								case "jeudi":
									res_jeudi[index-1] = "reserved";
									break;
								case "vendredi":
									res_vendredi[index-1] = "reserved";
									break;
								case "samedi":
									res_samedi[index-1] = "reserved";
									break;
							}
						}
						setReserved_lundi(reserved_lundi);
						setReserved_mardi(reserved_mardi);
						setReserved_mercredi(reserved_mercredi);
						setReserved_jeudi(reserved_jeudi);
						setReserved_vendredi(reserved_vendredi);
						setReserved_samedi(reserved_samedi);
					}

				});
				var agenda_table = document.getElementById('agenda_table');
				let hours_list = ["8:30 - 10:00", "10:15 - 11:45", "12:00 - 13:30", "13:45 - 15:15", "15:30 - 17:00"];

				let table = "";
				table += "<table class='tableres'><thead>"
				table += "<tr><th class='thr'>Heure</th><th class='thr'>Lun</th><th class='thr'>Mar</th><th class='thr'>Mer</th><th class='thr'>Jeu</th><th class='thr'>Ven</th><th class='thr'>Sam</th></tr><thead><tbody>";
				for (let i = 0; i < hours_list.length; i++) {
					table += "<tr><td class='tdr'>" + hours_list[i] + "</td>"
					for (let j = 0; j < 6; j++) {
						switch (j) {
							case 0:
								table += "<td class='tdr " + reserved_lundi[i] + "' > </td>";
								break;
							case 1:
								table += "<td class='tdr " + reserved_mardi[i] + "' > </td>";
								break;
							case 2:
								table += "<td class='tdr " + reserved_mercredi[i] + "' > </td>";
								break;
							case 3:
								table += "<td class='tdr " + reserved_jeudi[i] + "' > </td>";
								break;
							case 4:
								table += "<td class='tdr " + reserved_vendredi[i] + "' > </td>";
								break;
							case 5:
								table += "<td class='tdr " + reserved_samedi[i] + "' > </td>";
								break;
						}
					}
					table += "</tr>"
				}
				table += "</tbody></table>";
				agenda_table.innerHTML = table;
				const page_items = document.getElementsByClassName('page-item');
				for (let i = 0; i < page_items.length; i++) {
					page_items[i].addEventListener('click', function () {
						for (let j = 0; j < page_items.length; j++) {
							page_items[j].classList.remove('active');
						}
						this.classList.add('active');
					}
					)
				}
			}
		}
		getdata();
	});

	return (
		<div className="row">
			<h4 className="text-left container col-2" style={{ color: "darkblue", marginLeft: "10vw", marginTop: "10px", float: "left" }}><i>Reservation {title}</i></h4>
			<h4 className="col-12">
				<nav
					id="semaine_reservation"
					aria-label="Page navigation example"
				>
					<ul className="pagination">
						<li className="page-item active">
							<a className="page-link" style={{ cursor: "pointer" }} onClick={() => changetarget(0)}>
								Cette semaine
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" style={{ cursor: "pointer" }} onClick={() => changetarget(1)}>
								Semaine prochaine
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" style={{ cursor: "pointer" }} onClick={() => changetarget(2)}>
								Semaine après prochaine
							</a>
						</li>
					</ul>
				</nav>
			</h4>
			<div id="agenda_table" className="center"></div>
		</div>
	);
}
