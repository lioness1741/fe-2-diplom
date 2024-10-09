import React from "react";
import "./Stars.scss";

export default function Stars(){
    return(
        <div className="rating">
            <div className="rating__items">
                <input id="simple-rating__5" type="radio" className="rating__item"/>
                <label htmlFor="simple-rating__5" className="rating__lable"/>
                <input id="simple-rating__4" type="radio" className="rating__item"/>
                <label htmlFor="simple-rating__4" className="rating__lable"/>
                <input id="simple-rating__3" type="radio" className="rating__item"/>
                <label htmlFor="simple-rating__3" className="rating__lable"/>
                <input id="simple-rating__2" type="radio" className="rating__item"/>
                <label htmlFor="simple-rating__2" className="rating__lable"/>
                <input id="simple-rating__1" type="radio" className="rating__item"/>
                <label htmlFor="simple-rating__1" className="rating__lable"/>
            </div>
        </div>
    )
}