import React, {useEffect, useState} from "react";
import '../App.css'
import Game from "./Game";

export default function ViewGames() {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/games",
            {
              method: "GET",
              headers: {"Content-Type": "application/json"},
            }).then(response => response.json())
            .then((data) => {
              console.log(data);
              setGames(data);
            })
    
    
    }, []);


    return (
        <div>
            <ol>
            {games.map((game) => (
                    <Game key={game.gameId} title={game.title}/>
                ))} 

            </ol>
        </div>        
        
    )


}