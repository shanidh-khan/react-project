import "./createEmployee.scss";
import Select from "../../Components/Select/Select";
import TextField from "../../Components/TextField/TextField";
import { useEffect, useState } from "react";

const propertyArray = [
	{
		id: 1,
		label: "Employee Name",
		field: "employeeName"
	},
	{
		id: 2,
		label: "Employee ID",
		field: "employeeId"
	},
	{
		id: 3,
		label: "Joining Date",
		field: "joiningDate"
	},
	{
		id: 4,
		label: "Role",
		Component: Select,
		Options: ["Software Developer", "HR", "Tester"],
		field: "role"
	},
	{
		id: 5,
		label: "Status",
		Component: Select,
		Options: ["Active", "On Leave"],
		field: "status"
	},
	{
		id: 6,
		label: "Experience",
		field: "experience"
	},
	{
		id: 7,
		label: "Address",
		field: "address"
	},
];



const CreateEmployee = ({ handleCancel }) => {

	const [fields,setFields]=useState({
		employeeName : "",
		employeeId : "",
		joiningDate: "",
		role : "",
		status : "",
		experience : "",
		address : ""
	})

	const handleChange=(e, field)=>{
		
			setFields(prevState => ({
				...prevState,
				[field]: e.target.value
			}))
		
	}
	useEffect(()=>{
		console.log(fields)
	})
	
	return (
		<div className="createEmployeeContainer">
			<aside className="aside">
				<div className="imgcontainer">
					<img
						src="kv-logo.png"
						alt="KeyValue Logo"
						className="logo"
					/>
				</div>
				<nav className="navbar">
					<div className="optionsContainer">
						<button className="options">
							<div className="buttonLogoContainer">
								<img className="buttonLogo" src="icon.svg" />
							</div>
							<p className="buttonText">Employee List</p>
						</button>
					</div>
				</nav>
			</aside>

			<main style={{ padding: "0px" }}>
				<div className="mainContainer">
					<header className="blankHeader"></header>
					<section className="createEmployeeSection">
						<div className="heading">
							<h1>Create Employee</h1>
						</div>
						<div className="formContainer">
							<div className="upperPart">
								<form className="form">
									{propertyArray.map((obj) => {
										return obj.Component ? (
											<obj.Component
												key={obj.id}
												label={obj.label}
												divClassName="inputFields"
												inputClassName="inputOptions"
												options={obj.Options}
												onChange={handleChange}
												field={obj.field}
											/>
										) : (
											<TextField
												key={obj.id}
												label={obj.label}
												divClassName="inputFields"
												type="text"
												inputClassName="inputOptions"
												onChange={handleChange}
												field={obj.field}
												value={fields[obj.field]}
											/>
										);
									})}
								</form>
							</div>
							<div className="lowerPart">
								<button className="create">Create</button>
								<button
									className="cancel"
									onClick={handleCancel}
								>
									Cancel
								</button>
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
};
export default CreateEmployee;
