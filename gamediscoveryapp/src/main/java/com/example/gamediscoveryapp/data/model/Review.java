package com.example.gamediscoveryapp.data.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int reviewId;
    String reviewTitle;
    UUID userId;
    String username;
    int gameId;
    @Column(name = "date_posted")
    LocalDate datePosted;
    String reviewBody;

    public Review() {
    }

    public Review(int reviewId, String reviewTitle, UUID userId, String username, int gameId, LocalDate datePosted, String reviewBody) {
        this.reviewId = reviewId;
        this.reviewTitle = reviewTitle;
        this.userId = userId;
        this.username = username;
        this.gameId = gameId;
        this.datePosted = datePosted;
        this.reviewBody = reviewBody;
    }

    public int getReviewId() {
        return reviewId;
    }

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
    }

    public String getReviewTitle() {
        return reviewTitle;
    }

    public void setReviewTitle(String reviewTitle) {
        this.reviewTitle = reviewTitle;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public LocalDate getDatePosted() {
        return datePosted;
    }

    public void setDatePosted(LocalDate datePosted) {
        this.datePosted = datePosted;
    }

    public int getGameId() {
        return gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
    }

    public String getReviewBody() {
        return reviewBody;
    }

    public void setReviewBody(String reviewBody) {
        this.reviewBody = reviewBody;
    }

    @Override
    public String toString() {
        return "Review{" +
                "reviewId=" + reviewId +
                ", reviewTitle='" + reviewTitle + '\'' +
                ", userId=" + userId +
                ", username='" + username + '\'' +
                ", gameId=" + gameId +
                ", datePosted=" + datePosted +
                ", reviewBody='" + reviewBody + '\'' +
                '}';
    }
}
