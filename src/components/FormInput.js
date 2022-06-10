import React from "react";
import Button from "./Button";


// function FormInput() {
// 	return (
// 	 <>
// 	 <form>
// 		 <input placeholder="add new task here"></input>
// 		<Button text="add" variant="add"/>
// 	 </form>
// 	 </>
// 	);
//  }
//  export default FormInput;

class FormInput extends React.Component {

	state = {
		text: ""
	}

	// onChange saat diinput
change = e => {
this.setState({text: e.target.value})
}

//saat disubmit
submit = e => {
	e.preventDefault();
	if(this.state.text !== ""){
		this.props.add(this.state.text)
	}
	this.setState({
		text: ""
	})
}

render(){
return (
	<>
<form onSubmit={this.submit}>
 		 <input placeholder="add new task here" onChange={this.change} value={this.state.text}/>
 		<Button text="add" variant="add" onSubmit={this.submit}/>
 	 </form>
	  </>
	)
}
}

export default FormInput;