import React, { useState } from 'react';
import './index.css';
import { fetchColors } from '../../api';
import ColorChoices from '../ColorChoices';

/**
 * Solution to the Diversio FE Exercise
 * Color Picker Widget
 * Solution @author Atharva Shivankar <ads8046@g.rit.edu>
 * Date completed: July 7, 2022 
 */
const ColorWidget = () => {
    
    // START OF DATA FETCHING CODE
    const [ colors, setColors ] = useState(null);

        fetchColors
        .then((res) => {
                setColors(res);
        })
        .catch(
            (err) => {
                err = "500: Internal Server Error (would raise an actual status code for a real API)"
                console.log(err);
            }
        )
    // END OF DATA FETCHING CODE

    let colorsArray;
    let respDataString;

    // If the API call is unsuccessful, return a standard set of primary and secondary colors
    // to enable the user to continue using the widget with limited functionality
    // and log the error code (like with an actual API).
    if (colors) {
        colorsArray = colors.data.colorChoices;
        respDataString = JSON.stringify(colors);
    }  else {
        const defaultColorsArr = ["#FF0000", "#FFFF00", "#0000FF", "#FFA500", "#8F00FF", "#00FF00"];
        colorsArray = defaultColorsArr;
        respDataString = "Unable to fetch data from the API. " + 
                        "Here are default primary and secondary colors. " +
                        "Retrying... Please check the console for the error code.";
    };

    return (
        <div className="color-widget">
            <div className="color-widget-title">
                <h2>
                    Color Picker Widget<br/> 
                    Please Pick a Color!
                </h2>
            </div>
            <ColorChoices colorList={colorsArray}/>
            <br/> 
            <div className="payload-string-container">
                <h4>Mock API Payload:<br/></h4> 
                {respDataString}
            </div>
        </div> 
    );
}

export default ColorWidget;
