import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import '../App.css';
import '../styles/GameDetails.css'
import Review from "./Review";

export default function GameDetails() {
    const {gameId} = useParams();
    const [game, setGame] = useState(null);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        
        fetch(`http://localhost:8080/games/${gameId}`,
            {
              method: "GET",
              headers: {"Content-Type": "application/json"},
            }).then(response => response.json())
            .then((data) => {
              console.log(data);
              setGame(data);
            });

        fetch(`http://localhost:8080/reviews/${gameId}`,
            {
              method: "GET",
              headers: {"Content-Type": "application/json"},
            }).then(response => response.json())
            .then((data) => {
              console.log(data);
              setReviews(data);
            });
    
    
    }, [gameId]);








    return (
        <div className="game-details-container">
            {game ? (
            <div className="game-info">
                <img src={game.image} className="game-img" />
                <h2>{game.title}</h2>
                <p>Genre: {game.genre}</p>
                <p>Release Date: {game.releaseDate}</p>
                <p>Developer: {game.developer}</p>
                <p>Description: {game.description}</p>
            </div>
            ) : (
                <p>No game details avaialble.</p>
            )}

            <div className="reviews-container">
                <h3>Reviews</h3>
                {reviews.length > 0 ? (
                    <ul>
                        {reviews.map((review) => (
                            <Review
                                key={review.reviewId}
                                reviewTitle={review.reviewTitle}
                                username={review.username}
                                datePosted={review.datePosted}
                                reviewBody={review.reviewBody}
                            />
                        ))}
                    </ul>
                ) : (
                    <p>No reviews available for this game.</p>
                )}
            </div>
        </div>


    );
}