import React, {useEffect, useState} from "react";
import '../App.css'

export default function Review(props) {

    return (
        <li key={props.reviewId}>
        {<div> 
            <p>Game: {game.title}</p> <br/>
            <p>User: {props.username}</p> <br/>
            <p>Date Posted: {props.datePosted}</p>
            <p>Review Title: {props.reviewTitle}</p>
            <p>{props.reviewBody}</p></div>}
        </li>

    );

}        