import React from "react";
import pencilImage from "../images/f3.png";
import balloonImage from "../images/f4.png";
import flagImage from "../images/f5.png";

function Offer(props) {
    const images = {"pencil": pencilImage, "balloon": balloonImage, "flag": flagImage}

    return (
        <div className="offer__main">
            <img className="offer__image" src={images[props.imageName]} alt={props.imageName}/>
            <h2 className="offer__header">{props.title}</h2>
            <p className="offer__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit{props.end}</p>
        </div>
    )
}

export default Offer;