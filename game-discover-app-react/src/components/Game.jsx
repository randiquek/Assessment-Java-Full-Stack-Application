import React from "react";
import '../App.css'

export default function Game(props) {

    return (
        <li key={props.title}>{props.title} <br/>{props.genre} <br/>{props.releaseDate} <br/>{props.developer} <br/>{props.description} <br/>{props.rating}</li>);
}