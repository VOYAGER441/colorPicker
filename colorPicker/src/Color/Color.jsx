import React, { useState } from 'react';
import Style from './Color.module.css';

function Color() {

    const [color, setColor] = useState('#fff');

    const handelColorChane=(e)=>{
        setColor(e.target.value);
    }

    return (<>
        <div className={Style.Con}>
            <div className={Style.container}>

                <div className={`${Style.block} ${Style['dark-green']}`}></div>
                <div className={`${Style.block} ${Style.green}`}></div>
                <div className={`${Style.block} ${Style['light-green']}`}></div>
                <div className={`${Style.block} ${Style['lighter-green']}`}></div>
                <div className={`${Style.block} ${Style['lightest-green']}`}></div>
            </div>
            <div className={Style.ColorPickerCon}>
                <h1>Color Picker</h1>
                <div className={Style.ColorPickerDisplay}>
                    <p>Selected Color: {color}</p>
                </div>
                <label>Select a Color: </label>
                <input type='color' value= {color} onChange={(e)=>handelColorChane(e)}/>
            </div>

        </div>
    </>
    );
}

export default Color;
