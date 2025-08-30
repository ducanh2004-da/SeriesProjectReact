import React from "react";
import { accordian } from "./data";
import './style.css'
export function Accordian() {
    const [selected, setSelected] = React.useState([]);
    const [isEnable, setEnable] = React.useState(false);
    function handleClick(itemId) {
        if (!isEnable) {
            setSelected(selected[0] === itemId ? [] : [itemId]);
        } else {
            setSelected(prev =>
                prev.includes(itemId)
                    ? prev.filter(id => id !== itemId)
                    : [...prev, itemId]
            );
        }
    }
    function enable() {
        setEnable(prev => !prev);
        setSelected([]); // reset selection when mode changes
    }
    return (
        <div className="container">
            <button onClick={enable} style={{ marginBottom: '1rem' }}>
                {isEnable ? 'Disable Multi Choice' : 'Enable Multi Choice'}
            </button>
            {
                accordian.map(item => (
                    <div key={item.id} className="accordianItem">
                        <div>{item.title}</div>
                        <button onClick={() => handleClick(item.id)}>
                            {selected.includes(item.id) ? '-' : '+'}
                        </button>
                        {selected.includes(item.id) && (
                            <div className="description">
                                {item.description}
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    )
}