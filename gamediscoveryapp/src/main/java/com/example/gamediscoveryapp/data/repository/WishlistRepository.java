package com.example.gamediscoveryapp.data.repository;

import com.example.gamediscoveryapp.data.model.Wishlist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {
}
