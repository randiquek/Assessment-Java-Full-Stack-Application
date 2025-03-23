import React, {useEffect, useState} from "react";
import '../App.css'

export default function Review(props) {

    return (
        <li key={props.reviewId}>
        {<div> 
            <p>{props.reviewTitle}</p>
            <p>{props.username}</p>
            <p>{props.datePosted}</p>
            <p>{props.reviewBody}</p></div>}
        </li>

    );

}        