import React, {useState} from 'react';
import ColorBox from '../ColorBox';
import './index.css';

const ColorChoices = (props) => {
	
	const [currColor, setColorState] = useState("#808080");
	const colorChoices = props.colorList;

	const handleClick = (color) => {
		console.log("Click registered!");
		setColorState(color);
	};

	const renderColorSelectors = colorChoices.map( 
		(color) =>
			<div
				key={color} 
				className="colorChoiceBox"
				onClick={ () => handleClick(String(color)) }
				style={ {backgroundColor: String(color)} }
				tabIndex="0"
			/>
	);
	
	return (
		<div className="colorChoices">
			<ColorBox bgColor={String(currColor)}/>
			{renderColorSelectors}
		</div>
	);
}

export default ColorChoices;
