package com.example.gamediscoveryapp.controller;

import com.example.gamediscoveryapp.data.model.User;
import com.example.gamediscoveryapp.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.Serializable;
import java.util.List;

@RestController
@RequestMapping("/users")

public class UserController implements Serializable {
    @Autowired
    UserRepository userRepository;

    @GetMapping()
    public List<User> getResource() {
        return userRepository.findAll();
    }
}
