import React from "react";
import './Agenda.css'

export default function Agenda() {

	var agenda_table = document.getElementById('agenda_table');
	let hours_list = ["8:30 - 10:00","10:15 - 11:45","12:00 - 13:30","13:45 - 15:15","15:30 - 17:00"];
	function getDay(date) {
		var day = date.getDay();
		switch (day) {
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
	function isThisWeek(date) {
		var today = new Date();
		var day = today.getDay();
		var day_date = today.getDate();
		var day_month = today.getMonth();
		var day_year = today.getFullYear();
		var date_day = date.getDay();
		var date_date = date.getDate();
		var date_month = date.getMonth();
		var date_year = date.getFullYear();
		if (day_year == date_year && day_month == date_month && day_date == date_date) {
			return true;
		}
		return false;
	}
	
let	reserved_lundi = ["","reserved","","",""];
let reserved_mardi = ["","","","",""];
let reserved_mercredi = ["","","reserved","",""];
let reserved_jeudi = ["","","","",""];
let reserved_vendredi = ["reserved","","","",""];
let reserved_samedi = ["","","","","reserved"];

let table = "";
table += "<table className='tableres'><thead>"
table += "<tr><th className='thr'>Heure</th><th className='thr'>Lun</th><th className='thr'>Mar</th><th className='thr'>Mer</th><th className='thr'>Jeu</th><th className='thr'>Ven</th><th className='thr'>Sam</th></tr><thead><tbody>";
for (let i = 0; i < hours_list.length; i++) {
    table += "<tr><td className='tdr'>" + hours_list[i] + "</td>"
    for (let j = 0; j < 6; j++) {
        switch (j) {
            case 0:
                table += "<td className='tdr "+reserved_lundi[i]+"' > </td>";
                break;
            case 1:
                table += "<td className='tdr "+reserved_mardi[i]+"' > </td>";
                break;
            case 2:
                table += "<td className='tdr "+reserved_mercredi[i]+"' > </td>";
                break;
            case 3:
                table += "<td className='tdr "+reserved_jeudi[i]+"' > </td>";
                break;
            case 4:
                table += "<td className='tdr "+reserved_vendredi[i]+"' > </td>";
                break;
            case 5:
                table += "<td className='tdr "+reserved_samedi[i]+"' > </td>";
                break;
        }
    }
    table += "</tr>"
}
table += "</tbody></table>";
agenda_table.innerHTML = table;
const page_items = document.getElementsByClassName('page-item');
for (let i = 0; i < page_items.length; i++) {
    page_items[i].addEventListener('click', function() {
        for (let j = 0; j < page_items.length; j++) {
            page_items[j].classList.remove('active');
        }
        this.classList.add('active');
    }
    )
}

	
	return (
		<div>
			<h4 align="center">
				<nav
					id="semaine_reservation"
					className="center"
					aria-label="Page navigation example"
				>
					<ul className="pagination">
						<li className="page-item active">
							<a className="page-link" href="#">
								Cette semaine
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="#">
								Semaine prochaine
							</a>
						</li>
						<li className="page-item">
							<a className="page-link" href="#">
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
