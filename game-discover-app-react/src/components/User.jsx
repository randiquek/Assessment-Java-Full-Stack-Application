import React from "react";
import '../App.css';
import '../styles/ComponentRendering.css';

export default function User(props) {

    return (
        <li key={props.userId}>
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
        <p>{props.username}</p>
        <p>{props.authority}</p>
        <p>{props.createdAt}</p>
        </li>
    );
}