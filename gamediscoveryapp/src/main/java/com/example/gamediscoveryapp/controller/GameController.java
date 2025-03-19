package com.example.gamediscoveryapp.controller;

import com.example.gamediscoveryapp.data.model.Game;
import com.example.gamediscoveryapp.data.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.Serializable;
import java.util.List;


@RestController
@RequestMapping("/games")
public class GameController implements Serializable {
    @Autowired
    GameRepository gameRepository;

    @GetMapping()
    public List<Game> getResource() {
        return gameRepository.findAll();
    }
    @GetMapping("/{gameId}") //  localhost:8080/gameId/3
    public Game getGameById(@PathVariable int gameId) {
        return gameRepository.findById(gameId).get();

    }
}
