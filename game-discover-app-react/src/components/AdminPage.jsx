import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Review from "./Review";
import '../styles/AdminPage.css'
import Header from "./Header";


export default function AdminPage() {
    const [users, setUsers] = useState([]);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8080/users")
        .then((response) => response.json())
        .then((data) => {
            const filteredUsers = data.filter((user) => user.username.toLowerCase() !== "admin");
            setUsers(filteredUsers);
        }).catch((error) => console.error("Error fetching users:", error));

        fetch("http://localhost:8080/reviews")
        .then((response) => response.json())
        .then((data) => setReviews(data))
        .catch((error) => console.error("Error fetching reviews:", error));

    }, []);

    const deleteUser = (userId, username) => {
        if (window.confirm(`Are you sure you want to delete user ${username}?`)) {
            fetch(`http://localhost:8080/users/${userId}`, {
                method: "DELETE",
            }).then((response) => {
                if (response.ok) {
                    alert(`User ${username} has been deleted.`);
                    setUsers(users.filter((user) => user.userId !== userId));
                } else {
                    alert("Failed to delete user.");
                }    
            }).catch((error) => console.error("Error deleting user:", error));
        }
    };

    const deleteReview = (reviewId, reviewTitle) => {
        if (window.confirm(`Are you sure you want to delete review: "${reviewTitle}"?`)) {
            fetch(`http://localhost:8080/reviews/${reviewId}`, {
                method: "DELETE",
            }).then((response) => {
                if (response.ok) {
                    alert(`Review: "${reviewTitle}" has been deleted.`);
                    setReviews(reviews.filter((review) => review.reviewId !== reviewId));
                } else {
                    alert("Failed to delete review.");
                }
            }).catch((error) => console.error("Error deleting review:", error));
        }
    };

    return (
        <div>
            <Header/>
                <div className="admin-page-container">
                    <h2>Admin Dashboard</h2>
                    <div className="users-section">
                        <h3>Manage Users</h3>
                        <ul>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <li key={user.userId} className="admin-list-item">
                                        <span>{user.username}</span>
                                        <button className="delete-btn" onClick={() => deleteUser(user.userId, user.username)}>Delete</button>
                                        <Link to={`/user-profile/${user.userId}`} className="profile-link">View Profile</Link>
                                    </li>
                                ))
                            ) : (
                                <p>No users available.</p>
                            )}
                        </ul>
                    </div>
                    <div className="reviews-section">
                        <h3>Manage Reviews</h3>
                        <ul>
                            {reviews.length > 0 ? (
                                reviews.map((review) => (
                                    <div key={review.reviewId}>
                                        <Review
                                            reviewTitle={review.reviewTitle}
                                            username={review.username}
                                            gameId={review.gameId}
                                            datePosted={review.datePosted}
                                            reviewBody={review.reviewBody}
                                        />
                                        <button className="delete-btn" onClick={() => deleteReview(review.reviewId, review.reviewTitle)}>Delete</button>
                                    </div>
                                ))
                            ) : (
                                <p>No reviews available.</p>
                            )}
                        </ul>
                    </div>
                </div>
        </div>    
    );

}