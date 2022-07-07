import React from 'react';
import './index.css';

const ColorBox = (props) => {
	return (
		<div className="colorBox" style={{backgroundColor: String(props.bgColor)}}>
		</div>
	);
}

export default ColorBox;