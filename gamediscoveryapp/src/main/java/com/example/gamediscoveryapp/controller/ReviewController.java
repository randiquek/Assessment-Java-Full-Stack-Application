package com.example.gamediscoveryapp.controller;

import com.example.gamediscoveryapp.data.model.Review;
import com.example.gamediscoveryapp.data.model.User;
import com.example.gamediscoveryapp.data.repository.ReviewRepository;
import com.example.gamediscoveryapp.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/reviews")
public class ReviewController implements Serializable {
    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping()
    public List<Review> getResource() {
        return reviewRepository.findAll();
    }

    @GetMapping("/{gameId}")
    public List<Review> getReviewsByGameId(@PathVariable int gameId) {
        return reviewRepository.findByGameId(gameId);
    }

    @GetMapping("/user/{username}")
    public List<Review> getReviewsByUsername(@PathVariable String username) {
        return reviewRepository.findByUsername(username);
    }


}