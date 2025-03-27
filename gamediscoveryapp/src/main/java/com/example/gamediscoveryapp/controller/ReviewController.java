package com.example.gamediscoveryapp.controller;

import com.example.gamediscoveryapp.data.model.Review;
import com.example.gamediscoveryapp.data.model.User;
import com.example.gamediscoveryapp.data.repository.ReviewRepository;
import com.example.gamediscoveryapp.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.*;

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

    @PostMapping
    public Map<String, Object> createReview(@RequestBody Review reviewRequest) {
        Map<String, Object> map = new HashMap<>();
        if (reviewRequest.getUsername() == null || reviewRequest.getGameId() <= 0 || reviewRequest.getReviewBody().isEmpty()) {
            map.put("error", "Missing required fields.");
            return map;
        }
        reviewRequest.setDatePosted(LocalDate.now());

        Review savedReview = reviewRepository.save(reviewRequest);
        map.put("message", "Review submitted successfully.");
        map.put("review", savedReview);

        return map;
    }

    @DeleteMapping("/{reviewId}")
    public Map<String, String> deleteReview(@PathVariable int reviewId) {
        Map<String, String> map = new HashMap<>();
        if (reviewRepository.existsById(reviewId)) {
            reviewRepository.deleteById(reviewId);
            map.put("message", "Review deleted successfully.");
        } else {
            map.put("error", "Review not found.");
        }
        return map;
    }

}