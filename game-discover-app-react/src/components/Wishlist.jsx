import React, {useEffect, useState} from "react";
import '../App.css'
import { useParams } from "react-router-dom";

export default function Wishlist(props) {
    
    const [gameTitle, setGameTitle] = useState("");


    useEffect(() =>  {
        fetch(`http://localhost:8080/games/${props.gameId}`,
            {
              method: "GET",
              headers: {"Content-Type": "application/json"},
            }).then(response => response.json())
            .then((data) => {
              console.log(data);
              setGameTitle(data.title);
            });

    }, [props.gameId]);

    return (
        <div>
            <p>{gameTitle}</p>
            <p>{props.userId}</p>
            <p>{props.username}</p>
            <p>{props.dateAdded}</p>
        </div>
    );
}