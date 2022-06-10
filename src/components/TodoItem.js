import Button from "./Button";
import PropTypes from "prop-types";

// function TodoItem(props) {
// 	return (
// 	 <>
// 	 <div className="todoItem">
// 		 <p>{props.todo.title}</p>
// 		 <div>
// <Button text="edit" variant="success"/>
// <Button text="delete" variant="warning"/>
// 		 </div>
// 	</div>
// 	 </>
// 	);
//  }

const TodoItem = ({todo, del, open}) => {

const delById = id => {
	del(id)
}



return (
	<div className="todoItem">
		 <p>{todo.title}</p>
 	<div>
 <Button text="edit" variant="success" action={() => open(todo.id, todo.title)}/>
 <Button text="delete" variant="warning" action={() => delById(todo.id)}/>
 </div>
 </div>

)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	del: PropTypes.func.isRequired
}
 
export default TodoItem;



