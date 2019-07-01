
import React,{Component} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import '../Css/Home.css';
import { Link } from "react-router-dom";
import AuthHelperMethods from '../Authentication/AuthHelperMethods';

import '../Css/Login.css'



export default class Login extends Component {

	Auth = new AuthHelperMethods();
	

  constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.displayLogin = this.displayLogin.bind(this);
	}


	displayLogin =async (e) =>
	{
		e.preventDefault();

//const data=this.state;
// const response= await fetch('http://localhost:4000/backend/login',{
// 	method:'POST',
// 	headers:{
// 		'Content-Type':'application/json',
// 	},
// 	body:JSON.stringify({data}),
// });
// const body = await response.text();
// this.setState({response:body});
// console.log(data);

// fetch('http://localhost:4000/backend/login', {
// 	method: 'POST',
// 	body: JSON.stringify({
// 		data
// 	}),
// 	headers: {
// 		'Content-Type':'application/json'
// 	}
// })
// .then(res => {
// 	if (res.status === 200) {
// 	alert("Login success");
// 	} else {
// 		const error = new Error(res.error);
// 		throw error;
// 	}
// })
// .catch(err => {
// 	console.error(err);
// 	alert('Error logging in please try again');
// });

this.Auth.login(this.state.email,this.state.password)
.then(res =>{
	if(!res){
		return alert("sorry credentials does not exist");
	}
	this.props.history.replace('/undoguyshome');
})
.catch(err =>{
	alert(err)
})
 }

 componentWillMount(){
	 if(this.Auth.loggedIn())
	 this.props.history.replace('/undoguyshome');
 }

	
  render(){
		console.log(this.state.response);
  return (
<center>
	<div className="Login"> {/* login div started */}
<nav className="navbar navbar-expand-sm bg-light  "> {/*nav tag opened  */}

<Link to="/" className="navbar-brand" > {/* navbar-brand started */}
    <img  src={require('./Images/Logo.png')} alt="logo" width='100%' height='80'>
 
  </img>
  </Link> {/* navbar-brand closed */}
  
</nav> {/* navbar closed */}
<div className="sethu">
<div className="row  ml-auto">
    <div className=" container col-lg-6" >

   <form  onSubmit={this.displayLogin} > {/* form tag started &  column class for  input groups */}
 
	 <div className="name">
<input type="text"
							placeholder="Username"
							value={this.state.email}
							onChange={e=>this.setState({email:e.target.value})}
							name="email"
className="mb-3 mr-3  form-control "
						/>
</div>
<div className="password">
						<input
							type="password"
							placeholder="Password"
							value={this.state.password}
							onChange={e=>this.setState({password:e.target.value})}
							name="password"
							className="mb-3 mr-3 form-control"
						/>
						
						</div>
					
        	<input type="submit" value="Login"  className="bg-primary mb-3 mr-3 "/>
					<ul className="navbar-nav ml-auto"> {/* nav ul started */}
    <li className="nav-item "> {/* li 1 started */}
      <p className="nav-link text-dark" >Not yet registerd?

      <Link to="/register" >Signup</Link> </p> 
    </li> 
	</ul>
				</form>
				
				</div>
		
				<div className="col-lg-6" >

				<img  src={require('./Images/login.png')} alt="logo" width="85%" height="85%" ></img>
</div>
</div>
</div>
</div> 

</center>
);
}
}