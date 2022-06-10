import logo from '../logo.svg';
import '../App.css';
import FormInput from '../components/FormInput';
import TodoItem from '../components/TodoItem';
import React from 'react';
import EditModal from '../components/EditModal';
import { v4 as uuid } from "uuid"



// function App() {
//   return (
// 	  <section>
//     <div className="App">
//       <div className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          Todo List App
//         </p>
//       </div>
// 		<div className='list'>
// 		 <TodoItem/>
// 	 </div>
// 	 <div className='input-form'>
// 		 <FormInput/>
// 	 </div>
//     </div>
	 
// 	 </section>
//   );
// }

class Task extends React.Component {

state = {
	todos: [
		{
			id: 1,
			title:"reading a book"
		},
		{
			id: 2,
			title:"workout training"
		}
	],
	isEdit: false,
	editData : {
		id: "",
		title: ""
	}
}



//function save title baru / edit

update = () => {
	const {id, title} = this.state.editData
	const newData = {id, title}
	const newTodos = this.state.todos
	newTodos.splice((id-1), 1, newData)
this.setState ({
	
	todos: newTodos,
	isEdit: false,
	editData: {
		id: "",
		title: ""
	},

})
}
//function change

setTitle = e => {
	this.setState({
		editData: {
			...this.state.editData,
			title: e.target.value
		}
	})
}

//function open modal

openModal = (id, data) => {
	this.setState({
		isEdit: true,
		editData: {
			id,
			title: data
		}
	})
}

//function close modal

closeModal = () => {
	this.setState({
		isEdit: false
	})
}


//function delete task

deleteTask = asa => {

	console.log(asa);
	this.setState({
		todos: this.state.todos.filter(item => item.id !== asa),
	})
}

//function tambah task

addTask = data => {
const id = this.state.todos.length
const newData = {
	id: id+uuid(),
	title: data
}
this.setState({
	todos:[...this.state.todos, newData]
})
}

render (){
	const {todos} = this.state;
return(
   
		<section>
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />			<p>
						Todo List App
					</p>
				</div>
				<div className='list'>
					{todos.map(item => 
					<TodoItem
					key={item.id}
					todo={item}
					del={this.deleteTask}
					open={this.openModal}
					/>
					)}
				</div>
				<div className='input-form'>
					<FormInput add={this.addTask}/>
				</div>
				<EditModal edit={this.state.isEdit} close={this.closeModal} change={this.setTitle} data={this.state.editData} update={this.update}/>
			</div>

		</section>
		);

	}
}

export default Task;
