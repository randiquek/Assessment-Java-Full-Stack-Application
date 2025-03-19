import React, {useEffect, useState} from "react";
import '../App.css'

export default function Wishlist(props) {

const [game, setGame] = useState([]);
    

     useEffect(() => {
            
            fetch("http://localhost:8080/games/" + props.gameId,
                {
                  method: "GET",
                  headers: {"Content-Type": "application/json"},
                }).then(response => response.json())
                .then((data) => {
                  console.log(data);
                  setGame(data);
                })
        
        
        }, []);
    

    return (
        <li key={props.wishlistId}>
        {game && <div> 
            <p>Game: {game.title}</p> <br/>
            <p>User: {props.username}</p> <br/>
            <p>Date Added: {props.dateAdded}</p></div>}
        </li>
    )
}