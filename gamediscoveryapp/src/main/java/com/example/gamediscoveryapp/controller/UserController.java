package com.example.gamediscoveryapp.controller;

import com.example.gamediscoveryapp.data.model.Review;
import com.example.gamediscoveryapp.data.model.User;
import com.example.gamediscoveryapp.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")

public class UserController implements Serializable {
    @Autowired
    UserRepository userRepository;

    @GetMapping()
    public List<User> getResource() {
        return userRepository.findAll();
    }

    @GetMapping("/username/{username}")
    public User getUserByUsername(@PathVariable String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable UUID userId) {
        userRepository.deleteById(userId);
    }

}

