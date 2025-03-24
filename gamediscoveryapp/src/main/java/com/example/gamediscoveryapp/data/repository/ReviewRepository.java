package com.example.gamediscoveryapp.data.repository;

import com.example.gamediscoveryapp.data.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ReviewRepository extends JpaRepository<Review, Integer> {

    List<Review> findByGameId(int gameId);

    List<Review> findByUserId(UUID userId);

}
