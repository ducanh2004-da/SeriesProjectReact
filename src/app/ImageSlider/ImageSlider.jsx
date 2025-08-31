import { data } from "./data";
import React from "react";
import './style.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
export default function ImageSlider() {
    const [currentImage, setCurrentImage] = React.useState(0);
    const [error, setError] = React.useState('');

    function nextImg() {
        try {
            setCurrentImage(prev =>
                prev < data.length - 1 ? prev + 1 : 0
            );
        }
        catch (err) {
            setError(err);
        }
    }

    function prevImg() {
        try {
            setCurrentImage(prev =>
                prev > 0 ? prev - 1 : data.length - 1
            );
        }
        catch (err) {
            setError(err);
        }
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={prevImg} size={40} style={{ cursor: "pointer" }} />
            <div className="imgItem">
                {error === '' ? (
                    <img
                        className="visible"
                        alt={data[currentImage].alt}
                        src={data[currentImage].img}
                        style={{ width: "100%", height: "auto" }}
                    />
                ) : (
                    <div>{error}</div>
                )}
            </div>
            <BsArrowRightCircleFill onClick={nextImg} size={40} style={{ cursor: "pointer" }} />
        </div>
    );
}