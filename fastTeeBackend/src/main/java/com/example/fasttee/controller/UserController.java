package com.example.fasttee.controller;

import com.example.fasttee.models.TeeTimeModel;
import com.example.fasttee.models.UserModel;
import com.example.fasttee.repositories.TeeTimeRepository;
import com.example.fasttee.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value="/api/user")
public class UserController {
    private final UserRepository userRepository;
    private final TeeTimeRepository teeTimeRepository;

    @Autowired
    public UserController(UserRepository userRepository, TeeTimeRepository teeTimeRepository) {
        this.userRepository = userRepository;

        this.teeTimeRepository = teeTimeRepository;
    }

    @PostMapping(value = "/add")
    public String addUser(@RequestBody UserModel userModel) {
        userModel.setBookedTeeTimes(new ArrayList<>());
        userRepository.save(userModel);
        return "User Created";
    }

    @PostMapping(value = "/{id}/bookTeeTime")
    public String bookTeeTime(@RequestParam String tid,
                              @PathVariable String id,
                              @RequestParam String players) {
        ArrayList<String> details = new ArrayList<>();
        TeeTimeModel teeTime = teeTimeRepository.findTTById(tid);
        UserModel currUser = userRepository.findUserById(id);
        int spotsLeft = 4 - Integer.parseInt(players);
        details.add(teeTime.getId());
        details.add(teeTime.getDate());
        details.add(teeTime.getTime());
        details.add(players);

        currUser.addTeeTime(details);

        teeTime.setAvailableSpots(spotsLeft);
        teeTime.setFullyBooked(spotsLeft == 0);
        teeTimeRepository.save(teeTime);
        userRepository.save(currUser);

        return "Successfully booked tee time!";

    }

    @GetMapping(value = "/all")
    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping(value="/id/{id}")
    public UserModel getUserById(@PathVariable String id) {
        return userRepository.findUserById(id);

    }

    @GetMapping(value = "/email/{email}")
    public UserModel getUserByEmail(@PathVariable String email) {
        return userRepository.findUserByEmail(email);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable String id) {

        userRepository.deleteUserById(id);
        return "Deleted successfully";
    }


}
