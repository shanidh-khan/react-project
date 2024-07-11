import "../Login/login.scss";
import Logo from "../../assets/kv-login.jpeg";
import KVLogo from "../../assets/kv-logo.png";
import Button from "../../Components/Button/Button";
import TextField from "../../Components/TextField/TextField";
import { useEffect, useRef, useState } from "react";

const Login = (props) => {

	const inputRef = useRef(null);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError]= useState(false)
	useEffect(()=>{
		console.log
	},[username,password])

	const restrictUsername = (e)=>{
		if(e.target.value.length <=10) {
			setError(false)
			setUsername(e.target.value)}
			else setError(true)
	}
	return (
		<main>
			<div className="hero">
				<div className="wrapper-hero">
					<img src={Logo} alt="Login Image" className="login-image" />
				</div>
			</div>

			<div className="login">
				<form>
					<img src={KVLogo} alt="Logo" className="logo" />
					<TextField
						label="Username"
						type="text"
						className="inputFieldContainer"
						onChange={restrictUsername}
						value={username}
						error={error}
						ref={inputRef}

					/>
					<TextField
						label="Password"
						type="password"
						className="inputFieldContainer"
						onChange={(e)=>{setPassword(e.target.value)}}
						value={password}
						
					/>
					<Button text="Login" handleSubmit={props.handleSubmit} />
				</form>
			</div>
		</main>
	);
};

export default Login;
