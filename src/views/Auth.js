import React, { useState } from "react";
import { useHistory } from 'react-router-dom'; 
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";

const baseUrl = "https://my-udemy-api.herokuapp.com/api/v1"

const Auth = () => {
const history = useHistory()
const [login, setLogin] = useState(true)
const isLogin = () => setLogin(!login)
const [isLoading, setIsloading] = useState(false)

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

// fungsi LOGIN
const userLogin = async() => {
	setIsloading(true)
	const user = {
		email, password
	}
	try {
		const res = await axios.post(`${baseUrl}/user/signin`, user)
		
		// 1. token disimpan didalam localstorage webbrowser. krn memerlukan value dari token
		// 2. setelah token tersimpan dalam localStorage, dilakukan pengosongan nama,email,password
		// 3. melakukan pindah halaman dengan menggunakan useHistory
		localStorage.setItem("token", res.data.token)
		
		setIsloading(false)
		history.push("/task")
	
	} catch(err) {
		console.log(err)
	}
}

const userRegister = () => console.log("oke")

	return (
	<div className="box">
		<h3>{login ? "Login" : "Register"}</h3>
			<div>
				{!login && <Input placeholder="name" type="text" change={(e) => setName(e.target.value)}/>}
				<Input type="email" placeholder="email" change={(e) => setEmail(e.target.value)}/>
				<Input type="password" placeholder="password" change={(e) => setPassword(e.target.value)}/>			
			</div>
			<div>
				<Button variant="success" load={isLoading} text={login ? "Login" : "Register"} action={login ? userLogin : userRegister}/>
			</div>
			{ login ? (
				<div>
				<p>Belum punya akun? Silahkan <span onClick={isLogin}>Register</span></p>
				</div> ) : (
				<div>
				<p>Sudah punya akun? Silahkan <span onClick={isLogin}>Login</span></p>
				</div>
				)}	
	</div>
	)
}

export default Auth
