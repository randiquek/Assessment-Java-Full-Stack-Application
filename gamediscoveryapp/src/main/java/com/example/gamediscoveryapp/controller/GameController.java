package com.example.gamediscoveryapp.controller;

import com.example.gamediscoveryapp.data.model.Game;
import com.example.gamediscoveryapp.data.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
