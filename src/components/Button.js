import PropTypes from "prop-types";

// function Button(props) {
// 	return (
// 	 <>
// 	 <button className={`btn-${props.variant}`}>{props.text}</button>
// 	 </>
// 	);
//  }

 const Button = ({text, load, variant, action}) => {
	return (
		<>
		<button className={`btn btn-${variant}`} onClick={action}>
			{load ? "loading..." : text}
		</button>
		</>
	)
	}
	
	Button.propTypes = {
		text: PropTypes.string.isRequired,
		variant: PropTypes.string.isRequired,
		action: PropTypes.func
	}
 
 export default Button;