import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function FormCon1() {
	const [results, setResults] = useState([0]);
	const [salles, setSalles] = useState("");
	const [data,setData] = useState('');
	

	let Amphi = useRef("");

	useEffect(() => {
		let getdata = async()=>{
			var token = localStorage.getItem('token');
			console.log(token)
			let res = await axios.get('http://localhost:8000/api/salle',{
				headers:{
					'Authorization':'Bearer '+token
				}
			});

			setData(res.data)
		} ;
		getdata()
	}, []);


	let cherche = () => {
		setResults(data.filter((result) => result.Type === Amphi.current.value));
		setSalles(results.map((salle)=>
		 <a href="/Consulter1" className="list-group-item list-group-item-action">
		{salle.Nom}
	</a>))
	};

	

	let result = () => {
		
		if (Amphi.current.value !== "" && salles.length > 1) {
			return <><a className="list-group-item list-group-item-dark list-group-item-action active" aria-current="true">{Amphi.current.value}</a>{salles}</>
		}
		else{
			return <></>
		}
	}


	return (
		<div>
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
				
				
				{result()}
			</div>
			</div>
		</div>
	);
}
