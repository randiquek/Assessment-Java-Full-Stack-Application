package com.example.gamediscoveryapp.controller;

import com.example.gamediscoveryapp.data.model.Wishlist;
import com.example.gamediscoveryapp.data.repository.WishlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/wishlists")
public class WishlistController implements Serializable {
    @Autowired
    WishlistRepository wishlistRepository;

    @GetMapping()
    public List<Wishlist> getResource() {
        return wishlistRepository.findAll();
    }
}
