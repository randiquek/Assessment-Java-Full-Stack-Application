import React, {useEffect, useState} from "react";
import '../styles/ViewGames.css'
import Game from "./Game";
import Header from "./Header";
import Footer from "./Footer";
import { sortingUtility } from "../utilities/sortingUtility";
import { Link } from "react-router-dom";

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
              setSortedGames(data);
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
                        <Link
                            to={`/game-details/${game.gameId}`}
                            key={game.gameId}
                            className="game-link"
                        >
                            <Game image={game.image} title={game.title}/>
                        </Link>
                        ))} 

                    </ul>
            </div> 
            
        </div>  
        <Footer/>     
        </>
    )


}