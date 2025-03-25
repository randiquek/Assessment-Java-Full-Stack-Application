import React, {useEffect, useState} from "react";
import '../App.css'

export default function Review(props) {

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
        <li key={props.reviewId}>
        {<div> 
            <p>{gameTitle}</p>
            <p>{props.reviewTitle}</p>
            <p>{props.username}</p>
            <p>{props.gameId}</p>
            <p>{props.datePosted}</p>
            <p>{props.reviewBody}</p></div>}
        </li>

    );

}        