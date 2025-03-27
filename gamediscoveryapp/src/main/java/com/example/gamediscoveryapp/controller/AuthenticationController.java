package com.example.gamediscoveryapp.controller;

import com.example.gamediscoveryapp.data.model.User;
import com.example.gamediscoveryapp.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public Map<String, String> signUp(@RequestBody User user) {
        Map<String, String> map = new HashMap<>();
        Optional<User> existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser.isPresent()) {
            map.put("error", "Username already exists!");
        } else {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            map.put("message", "User registered successfully!");
        }
        return map;
    }

    @PostMapping("/login")
        public Map<String, Object> login(@RequestBody User loginRequest) {
            Map<String, Object> map = new HashMap<>();
            Optional<User> user = userRepository.findByUsername(loginRequest.getUsername());
            if (user.isPresent() && passwordEncoder.matches(loginRequest.getPassword(), user.get().getPassword())) {
                map.put("userId", user.get().getUserId());
                map.put("username", user.get().getUsername());
                map.put("authority", user.get().getAuthority());
                return map;
            }
            else {
                return null;
            }
        }


}
