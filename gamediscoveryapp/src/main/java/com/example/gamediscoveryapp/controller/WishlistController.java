package com.example.gamediscoveryapp.controller;

import com.example.gamediscoveryapp.data.model.Game;
import com.example.gamediscoveryapp.data.model.Wishlist;
import com.example.gamediscoveryapp.data.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/wishlists")
public class WishlistController implements Serializable {
    @Autowired
    WishlistRepository wishlistRepository;


    @GetMapping()
    public List<Wishlist> getResource() {
        return wishlistRepository.findAll();
    }

    @GetMapping("/{username}")
    public List<Wishlist> getWishlistByUsername(@PathVariable String username) {
        return wishlistRepository.findByUsername(username);
    }

    @PostMapping
    public Wishlist addToWishlist(@RequestBody Wishlist wishlist) {
        wishlist.setDateAdded(java.time.LocalDate.now());
        return wishlistRepository.save(wishlist);
    }

    @DeleteMapping("/{userId}/{gameId}")
    public void removeFromWishlist(@PathVariable UUID userId, @PathVariable int gameId) {
        Wishlist wishlist = wishlistRepository.findByUserIdAndGameId(userId, gameId)
                .orElseThrow(() -> new RuntimeException("Wishlist item not found"));
        wishlistRepository.delete(wishlist);
    }

}
