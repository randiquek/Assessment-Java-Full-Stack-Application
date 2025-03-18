package com.example.gamediscoveryapp.data.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "wishlist")
public class Wishlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int wishlistId;
    int gameId;
    UUID userId;
    String username;
    @Column(name = "date_added")
    LocalDate dateAdded;

    public Wishlist() {
    }

    public Wishlist(int wishlistId, int gameId, UUID userId, String username, LocalDate dateAdded) {
        this.wishlistId = wishlistId;
        this.gameId = gameId;
        this.userId = userId;
        this.username = username;
        this.dateAdded = dateAdded;
    }

    public int getWishlistId() {
        return wishlistId;
    }

    public void setWishlistId(int wishlistId) {
        this.wishlistId = wishlistId;
    }

    public int getGameId() {
        return gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
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

    public LocalDate getDateAdded() {
        return dateAdded;
    }

    public void setDateAdded(LocalDate dateAdded) {
        this.dateAdded = dateAdded;
    }

    @Override
    public String toString() {
        return "Wishlist{" +
                "wishlistId=" + wishlistId +
                ", gameId=" + gameId +
                ", userId=" + userId +
                ", username='" + username + '\'' +
                ", dateAdded=" + dateAdded +
                '}';
    }
}
