import React, {useEffect, useState} from "react";
import '../styles/ViewGames.css'
import Game from "./Game";
import Header from "./Header";
import { sortingUtility } from "../utilities/sortingUtility";

export default function ViewGames() {
    const [games, setGames] = useState([]);
    const [sortedGames, setSortedGames] = useState([]);
    const [sortCriteria, setSortCriteria] = useState("");

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

    const handleSort = (criteria) => {
        const sortedArray = sortingUtility(games, criteria);
        setSortedGames(sortedArray);
        setSortCriteria(criteria);

    };


    return (
        <>
        <Header/>
        <div className="page-container">
            <div className="filter-container">
                <p>Sort Game By:</p>
                <button onClick={() => handleSort("genre")}>Genre</button>
                <button onClick={() => handleSort("title")}>Alphabetical</button>
                <button onClick={() => handleSort("releaseDate")}>Release Date</button>
            </div>    
            <div className="games-containter">
                <ul>
                {sortedGames.map((game) => (
                        <Game key={game.gameId} image={game.image} title={game.title}/>
                    ))} 

                </ul>
            </div> 
            
        </div>       
        </>
    )


}