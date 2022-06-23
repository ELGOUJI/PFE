import React from "react";
import Header from "../../navbar/header/Header";
import jwt_decode from "jwt-decode";
import "./Profile.css";

export default function Profile() {
	console.log(jwt_decode(localStorage.getItem("token")));
	return (
		<>
			<Header />
			<div className="container emp-profile">
				<form method="post">
					<div className="row">
						<div className="col-md-4">
							<div className="profile-img">
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
									alt=""
								/>
								<div className="file btn btn-lg btn-primary">
									Change Photo
									<input type="file" name="file" />
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="profile-head">
								<h5>Ayoub Elgouji</h5>
								<h6>Web Developer and Designer</h6>
								<p className="proile-rating">
									Filière : <span>SMI</span>
								</p>
								<ul className="nav nav-tabs" id="myTab" role="tablist">
									<li className="nav-item">
										<a
											className="nav-link active"
											id="home-tab"
											data-toggle="tab"
											href="#home"
											role="tab"
											aria-controls="home"
											aria-selected="true"
										>
											About
										</a>
									</li>
									<li className="nav-item">
										<a
											className="nav-link"
											id="profile-tab"
											data-toggle="tab"
											href="#profile"
											role="tab"
											aria-controls="profile"
											aria-selected="false"
										>
											Timeline
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-2">
							<input
								type="submit"
								className="profile-edit-btn"
								name="btnAddMore"
								value="Edit Profile"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-8 offset-md-4">
							<div className="tab-content profile-tab" id="myTabContent">
								<div
									className="tab-pane fade show active"
									id="home"
									role="tabpanel"
									aria-labelledby="home-tab"
								>
									<div className="row">
										<div className="col-md-6">
											<label>Name</label>
										</div>
										<div className="col-md-6">
											<p>Fati</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Prenom</label>
										</div>
										<div className="col-md-6">
											<p>Abbour</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>username</label>
										</div>
										<div className="col-md-6">
											<p>fatti-abbour@gmail.com</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Phone</label>
										</div>
										<div className="col-md-6">
											<p>06 50 36 36 62</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Profession</label>
										</div>
										<div className="col-md-6">
											<p>Web Developer and Designer</p>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="profile"
									role="tabpanel"
									aria-labelledby="profile-tab"
								>
									<div className="row">
										<div className="col-md-6">
											<label>Experience</label>
										</div>
										<div className="col-md-6">
											<p>Expert</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Hourly Rate</label>
										</div>
										<div className="col-md-6">
											<p>10$/hr</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Total Projects</label>
										</div>
										<div className="col-md-6">
											<p>230</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>English Level</label>
										</div>
										<div className="col-md-6">
											<p>Expert</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<label>Availability</label>
										</div>
										<div className="col-md-6">
											<p>6 months</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<label>Your Bio</label>
											<br />
											<p>Your detail description</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
