package com.example.gamediscoveryapp.data.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "game")
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "game_id")
    int gameId;
    String title;
    String genre;
    @Column(name = "release_date")
    LocalDate releaseDate;
    String developer;
    String description;
    int rating;
    String image;

    public Game() {
    }

    public Game(int gameId, String title, String genre, LocalDate releaseDate, String developer, String description, int rating, String image) {
        this.gameId = gameId;
        this.title = title;
        this.genre = genre;
        this.releaseDate = releaseDate;
        this.developer = developer;
        this.description = description;
        this.rating = rating;
        this.image = image;
    }

    public int getGameId() {
        return gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDeveloper() {
        return developer;
    }

    public void setDeveloper(String developer) {
        this.developer = developer;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Game{" +
                "gameId=" + gameId +
                ", title='" + title + '\'' +
                ", genre='" + genre + '\'' +
                ", releaseDate=" + releaseDate +
                ", developer='" + developer + '\'' +
                ", description='" + description + '\'' +
                ", rating=" + rating +
                ", image='" + image + '\'' +
                '}';
    }
}


