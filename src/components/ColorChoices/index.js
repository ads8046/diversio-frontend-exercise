import React, {useState} from 'react';
import ColorBox from '../ColorBox';
import './index.css';

/**
 * Solution to the Diversio FE Exercise
 * Color Picker Widget
 * Solution @author Atharva Shivankar <ads8046@g.rit.edu>
 * Date completed: July 7, 2022 
 */

// This component renders small boxes of available color choices for the user 
const ColorChoices = (props) => {
	
	const [currColor, setColorState] = useState("#808080");
	const colorChoices = props.colorList;

	// function to handle the state when the user clicks a choice div element
	// the function sets the current state to the user's chosen color and this
	// new current state is passed as a prop to the ColorBox component to update it.  
	const handleClick = (color) => {
		setColorState(color);
	};

	// populates div elements with the colors which the user can choose from by clicking.
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
			<ColorBox pickedColor={String(currColor)}/>
			{renderColorSelectors}
		</div>
	);
}

export default ColorChoices;
