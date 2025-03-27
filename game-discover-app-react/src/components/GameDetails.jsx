import React, {useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import '../App.css';
import '../styles/GameDetails.css'
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import Header from "./Header";

export default function GameDetails() {
    const {gameId} = useParams();
    const user = JSON.parse(localStorage.getItem("user"));
    const [game, setGame] = useState(null);
    const [reviews, setReviews] = useState([])
    const [showReviewForm, setShowReviewForm] = useState(false);
    



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

    const handleReviewSubmission = (newReview) => {
        fetch("http://localhost:8080/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...newReview, gameId, username: user.username, userId: user.userId }),
        }).then((response) => response.json())
        .then((data) => {
            if (data.error) {
                alert(data.error);
            } else {
                alert(data.message);
                setReviews((prevReviews) => [...prevReviews, data.review]);
                setShowReviewForm(false);
            }
        })
        .catch((error) => console.error("Error submitting review:", error));

    }

    const addToWishlist = () => {
        const wishlistItem = {
            userId: user.userId,
            username: user.username,
            gameId: gameId,
        };
        console.log(wishlistItem);

        fetch("http://localhost:8080/wishlists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(wishlistItem),
        }).then((response) => {
            if (response.ok) {
                alert(`${game.title} has been added to your wishlist!`);
            } else {
                alert("Failed to add to wishlist.");
            }
        }).catch((error) => console.error("Error adding to wishlist:", error))
    };


    return (
        <>
        <Header/>
        <div className="game-details-container">
            {game ? (
            <div className="game-info">
                <img src={game.image} className="game-img" />
                <h2>{game.title}</h2>
                <p>Genre: {game.genre}</p>
                <p>Release Date: {game.releaseDate}</p>
                <p>Developer: {game.developer}</p>
                <p>Description: {game.description}</p>
                <button onClick={addToWishlist}>Add to Wishlist</button>

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
                {user && user.authority !== "ADMIN" && (
                    <>  
                        <button className="add-review-btn" onClick={() => setShowReviewForm(!showReviewForm)}>
                            {showReviewForm ? "Cancel Add Review" : "Add a Review"}
                        </button>
                        {showReviewForm && (
                            <div className="review-form-container">
                                <h3>Write a Review</h3>
                                <ReviewForm onSubmit={handleReviewSubmission} />
                            </div>
                        )}
                    </>
                )}
        </div>
        </>            

    );
}