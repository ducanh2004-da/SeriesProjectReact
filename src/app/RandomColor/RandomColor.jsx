import React from "react";
import './style.css'

export default function RandomColor() {
    const [color, setColor] = React.useState('#ede4e4');
    const [typeColor, setTypeColor] = React.useState('hex');
    function Random(length) {
        return Math.floor(Math.random() * length);
    }
    function RandomHex() {
        const itemRandom = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for(var i = 0; i < 6; i++){
            hexColor += itemRandom[Random(itemRandom.length)];
        }
        setColor(hexColor);
    }
    function RandomRGB() {
        let r = Random(256);
        let g = Random(256);
        let b = Random(256);
        setColor(`rgb(${r},${g},${b})`);
    }
    return (
        <div className="container" style={{ backgroundColor: color }}>
            <div className="button-list">
                <button onClick={() => setTypeColor('hex')}>Create Hex</button>
                <button onClick={() => setTypeColor('rgb')}>Create RGB</button>
                <button onClick={() => typeColor === 'hex' ? RandomHex() : RandomRGB()}>Random Color</button>
            </div>
            <div className="content">
                <h2>{color}</h2>
                <h3>{typeColor}</h3>
            </div>
        </div>
    )
}