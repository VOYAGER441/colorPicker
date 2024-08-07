import React, { useState } from 'react';
import chroma from 'chroma-js';
import Style from './Color.module.css';

function Color() {
    const [color, setColor] = useState('#fff');

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const generateShades = (baseColor) => {
        return chroma.scale([baseColor, '#0C0404']).mode('lab').colors(6);
    };

    const shades = generateShades(color);

    return (
        <>
            <div className={Style.Con}>
                <div className={Style.container}>
                    <div className={Style.block} style={{ backgroundColor: shades[0] }}></div>
                    <div className={Style.block} style={{ backgroundColor: shades[1] }}></div>
                    <div className={Style.block} style={{ backgroundColor: shades[2] }}></div>
                    <div className={Style.block} style={{ backgroundColor: shades[3] }}></div>
                    <div className={Style.block} style={{ backgroundColor: shades[4] }}></div>
                </div>
                <div className={Style.ColorPickerCon}>
                    <h1>Color Picker</h1>
                    <div className={Style.ColorPickerDisplay}>
                        <p>Selected Color: {color}</p>
                    </div>
                    <label>Select a Color: </label>
                    <input
                        type='color'
                        value={color}
                        onChange={handleColorChange}
                    />
                </div>
            </div>
        </>
    );
}

export default Color;
