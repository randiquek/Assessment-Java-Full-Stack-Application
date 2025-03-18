package com.example.gamediscoveryapp.data.repository;

import com.example.gamediscoveryapp.data.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Integer> {
}
