import React, { useState, useEffect } from "react";
import '../App.css';
import { useParams } from "react-router-dom";
import Wishlist from "./Wishlist";
import User from "./User";


export default function UserProfile() {
    const {username} = useParams();
    const [user, setUser] = useState([]);
    const [wishlist, setWishlist] = useState([]);
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
            
        fetch("http://localhost:8080/wishlists",
            {
              method: "GET",
              headers: {"Content-Type": "application/json"},
            }).then(response => response.json())
            .then((data) => {
              console.log(data);
              setWishlist(data);
            });

        fetch(`http://localhost:8080/reviews/user/username/${username}`,
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
                    {wishlist.map((item) => (
                        <Wishlist
                            key={item.wishlistId}
                            wishlistId={item.wishlistId}
                            title={item.title}
                            username={item.username}
                            dateAdded={item.dateAdded}
                        />
                    ))}
                </ul>
            </div>
            <div className="reviews">
                <h2>Game Reviews</h2>
                <ul>
                {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <li key={review.reviewId}>
                                <p>Game Title: {review.gameTitle}</p>
                                <p>{review.reviewTitle}</p>
                                <p>Review Body: {review.reviewBody}</p>
                                <p>Date Posted: {review.datePosted}</p>
                            </li>
                        ))
                    ) : (
                        <p>This user hasn't written any reviews yet.</p>
                    )}
                </ul>
            </div>
        </div>
    );


   
}