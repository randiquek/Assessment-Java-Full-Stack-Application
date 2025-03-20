import React from "react";
import '../App.css'

export default function Game(props) {

    return (
        <li key={props.title} className="game-item">
        {props.image !== 'none' ? (
        <img src={props.image} alt={`${props.title} cover`} className="game-img" />
    ) : (
        <div className="image-placeholder">No Image Available</div>
    )}     <h3 className="title">{props.title}</h3> <br/>{props.genre} <br/>{props.releaseDate} <br/>{props.developer} <br/>{props.description} <br/>{props.rating}</li>);
}