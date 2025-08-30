import React from "react";
import './style.css'
import { FaStar } from "react-icons/fa";
export default function StarRating({ noStar = 5 }) {
    const [rating, setRating] = React.useState(0);
    const [hover, setHover] = React.useState(0);

    function handleClick(index) {
        setRating(index);
    }
    function handleMouseEnter(index) {
        setHover(index);
    }
    function handleMouseLeave() {
        setHover(0);
    }
    return (
        <div className="container">
            {
                [...Array(noStar)].map((_, i) => {
                    const index = i + 1;
                    return (
                        <FaStar
                            key={index}
                            className={index <= (rating || hover) ? "active" : "inactive"}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            size={40}
                        />
                    );
                })
            }
        </div>
    )
}