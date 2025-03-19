import React from "react";
import '../App.css'

export default function Game(props) {

    return (
        <li key={props.title}> Title: {props.title} <br/>Genre: {props.genre} <br/>Release Date: {props.releaseDate} <br/>Developer: {props.developer} <br/>Description: {props.description} <br/>Rating: {props.rating}</li>);
}