package com.example.fasttee.controller;
import com.example.fasttee.models.UserModel;
import com.example.fasttee.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/user")
public class UserController {
    private UserRepository userRepository;
    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;

    }

    @PostMapping(value = "/add")
    public String addUser(@RequestBody UserModel userModel) {
        userRepository.save(userModel);
        return "User created!";
    }

    @GetMapping(value = "/all")
    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping(value = "/{email}")
    public UserModel getUser(@PathVariable String email) {
        UserModel user = userRepository.findByEmail(email);
        return user;
    }

    @DeleteMapping("/delete/{email}")
    public String deleteUser(@PathVariable String email) {
        userRepository.deleteByEmail(email);
        return "Deleted successfully";
    }


}
