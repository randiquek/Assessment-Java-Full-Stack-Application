package com.example.gamediscoveryapp.data.repository;

import com.example.gamediscoveryapp.data.model.Review;
import com.example.gamediscoveryapp.data.model.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {
    List<Wishlist> findByUsername(String username);
}
