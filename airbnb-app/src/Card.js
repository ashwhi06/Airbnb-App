 import kate from '../src/katie-zaferes.png';
// import star from '../src/images/star.png';
import React from 'react';
import star from '../src/star.png';

export default function Card(props){
    console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={kate} className="card--image" alt="Card info"/>
            <div className='card--stats'>
                <img src={star} className='card--star' alt={star}/>
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) • &nbsp;</span>
                <span className='gray' alt="{props.location}">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From {props.price}</span> / person</p>
        </div>
    )
}