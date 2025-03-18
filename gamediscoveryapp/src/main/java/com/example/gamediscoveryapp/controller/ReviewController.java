package com.example.gamediscoveryapp.controller;

import com.example.gamediscoveryapp.data.model.Review;
import com.example.gamediscoveryapp.data.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController implements Serializable {
    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping()
    public List<Review> getResource() {
        return reviewRepository.findAll();
    }
}
