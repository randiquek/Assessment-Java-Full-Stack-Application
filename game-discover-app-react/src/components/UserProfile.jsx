import React, { useState, useEffect } from "react";
import '../App.css';
import { useParams } from "react-router-dom";
import Wishlist from "./Wishlist";
import User from "./User";
import Review from "./Review";


export default function UserProfile() {
    const {username} = useParams();
    const [user, setUser] = useState([]);
    const [wishlists, setWishlists] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        
        fetch(`http://localhost:8080/users/username/${username}`,
                {
                  method: "GET",
                  headers: {"Content-Type": "application/json"},
                }).then(response => response.json())
                .then((data) => {
                  console.log(data);
                  setUser(data);
                });
            
        fetch(`http://localhost:8080/wishlists/${username}`,
            {
              method: "GET",
              headers: {"Content-Type": "application/json"},
            }).then(response => response.json())
            .then((data) => {
              console.log(data);
              setWishlists(data);
            });
  

        fetch(`http://localhost:8080/reviews/user/${username}`,
                {
                  method: "GET",
                  headers: {"Content-Type": "application/json"},
                }).then(response => response.json())
                .then((data) => {
                  console.log(data);
                  setReviews(data);
                });     
    
    
    }, [username]);

    return (
        <div className="user-profile-container">
            <div className="user-info">
                <ul>
                    <User
                        userId={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        username={user.username}
                        createdAt={user.createdAt}
                    />
                </ul>
            </div>

            <div className="wishlist">
                <h2>Game Wishlist</h2>
                <ul>
                    {wishlists.map((wishlist) => (
                        <Wishlist
                            key={wishlist.wishlistId}
                            gameId={wishlist.gameId}
                            username={wishlist.username}
                            dateAdded={wishlist.dateAdded}
                        />
                    ))}
                </ul>
            </div>
            <div className="reviews">
                <h2>Game Reviews</h2>
                <ul>
                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <Review
                                key={review.reviewId}
                                gameTitle={review.gameTitle}
                                gameId={review.gameId}
                                reviewTitle={review.reviewTitle}
                                username={review.username}
                                datePosted={review.datePosted}
                                reviewBody={review.reviewBody}

                            />
                        ))
                    ) : (
                        <p>This user hasn't written any reviews yet.</p>
                    )}
                </ul>
            </div>
        </div>
    );


   
}