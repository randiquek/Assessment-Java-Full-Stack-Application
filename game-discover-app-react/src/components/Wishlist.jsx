import React, {useEffect, useState} from "react";
import '../App.css'

export default function Wishlist(props) {
    
    return (
        <li key={props.wishlistId}>
        {<div> 
            <p>{props.title}</p>
            <p>{props.username}</p>
            <p>{props.dateAdded}</p>
          </div>}
        </li>
    );
}