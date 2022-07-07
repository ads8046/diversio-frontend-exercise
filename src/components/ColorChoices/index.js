import React, {useState} from 'react';
import ColorBox from '../ColorBox';
import './index.css';

/* placeholder, use or delete! */

const ColorChoices = (props) => {
	
	const [curr, changeColor] = useState("grey");

	const handleClick = (color) => {
		console.log("Click registered!")
		changeColor(color);
		console.log("current color clicked is " + curr);
	}

	console.log(String(props.list));
	const colorChoices = props.list;

	const renderedOutput = colorChoices.map(
	 	(color) => 
	 		<div key={color} className="colorChoiceBox"
				onClick={ () => handleClick(String(color)) }
				style={{backgroundColor: String(color)}}
				tabIndex="0"
			/> 
	)

	return (
		<div className="colorChoices">
			<ColorBox bgColor={String(curr)}/>
			{renderedOutput}
		</div>
	);
}

export default ColorChoices;
