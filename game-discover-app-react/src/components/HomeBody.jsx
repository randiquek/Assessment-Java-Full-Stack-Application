import React, { useState, useEffect } from "react";
import Game from "./Game";
import '../App.css';

export default function HomeBody() {
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
                    <Game key={game.gameId} title={game.title} genre={game.genre} releaseDate={game.releaseDate} developer={game.developer} description={game.description} rating={game.rating}/>
                ))}
            </ol>
        </div>


    );
}