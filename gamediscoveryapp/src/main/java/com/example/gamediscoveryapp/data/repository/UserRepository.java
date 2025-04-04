package com.example.gamediscoveryapp.data.repository;

import com.example.gamediscoveryapp.data.model.Review;
import com.example.gamediscoveryapp.data.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByUsername(String username);
}
