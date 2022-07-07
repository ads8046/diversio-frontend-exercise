import React from 'react';
import './index.css';

/**
 * Solution to the Diversio FE Exercise
 * Color Picker Widget
 * Solution @author Atharva Shivankar <ads8046@g.rit.edu>
 * Date completed: July 7, 2022 
 */

// ColorBox component renders a large "box" div element that highlights the user's picked color
const ColorBox = (props) => {
	return (
		<div className="colorBox" style={{backgroundColor: String(props.pickedColor)}}/>
	);
}

export default ColorBox;
