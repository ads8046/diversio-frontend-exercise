import React, { useState } from 'react';
import './index.css';
import { fetchColors } from '../../api';
import ColorChoices from '../ColorChoices';

const ColorWidget = (props) => {

    /* Diversio's front end uses react-redux and redux-saga to
    manage fetching data from the backend API, placing it into
    the redux store, and making it available to appropriate components.

    https://react-redux.js.org/introduction/getting-started
    https://redux-saga.js.org/docs/introduction/GettingStarted

    If you are familiar with react-redux, 
    please use it to replace the DATA FETCHING CODE below,
    and make the colors list available via props.

    If you are familiar with redux-saga, please use it to
    trigger the data fetch when this component loads.

    You may treat fetchColors as a black-box "API".
    You don't need to edit it, but you are welcome to look at its code.

    If you are not comfortable with any of the above, 
    you are welcome to leave this Promise here as is.
    */
    // START OF DATA FETCHING CODE
    const [ colors, setColors ] = useState(null);

        fetchColors
        .then((res) => {
                setColors(res);
        })
        .catch(
            (e) => {
                console.log(e);
            }
        )

    // const responseObj = async () => {
    //     try {
    //         const resp = await fetchColors;
    //         return resp;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // console.log(responseObj);

    // setColors(responseObj);
    

    // // END OF DATA FETCHING CODE 
    let colorsArray;

    if (colors) {
        colorsArray = colors.data.colorChoices;
        console.log(colorsArray);
    } else {
        const defaultColorsArr = ["#D7CEE4", "#CFB4F7", "#6221EA", "#0725E8", "#B6BFF6", 
            "#FEBECD", "#FBC02D", "#109CF1", "#FF2455", "#FF8A00", "#8F40EB"]
        colorsArray = defaultColorsArr;
    }

    return (
        
        <div className="color-widget">
            <div className="color-widget-title">
                <h2>Color Picker Widget<br/> 
                Pick a color! </h2>  
            </div>
            <ColorChoices colorList={colorsArray}/>
            <br/> 
            <div>
                <h4>API Payload:<br/></h4> 
                {JSON.stringify(colors)}
            </div>
        </div> 
    );
}

export default ColorWidget;
