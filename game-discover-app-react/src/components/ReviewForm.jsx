import React, {useState} from "react";


export default function ReviewForm({ onSubmit }) {
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewBody, setReviewBody] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            reviewTitle,
            reviewBody,
        });
        setReviewTitle("");
        setReviewBody("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Review Title:</label>
                <input
                type="text"
                value={reviewTitle}
                onChange={(e) => setReviewTitle(e.target.value)}
                required
                />
            </div>
            <div>
                <label>Review Body:</label>
                <textarea
                    value={reviewBody}
                    onChange={(e) => setReviewBody(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit">Submit Review</button>
        </form>
    );
}