package com.example.fasttee.controller;

import com.example.fasttee.models.TeeTimeModel;
import com.example.fasttee.repositories.TeeTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/teetime")
public class TeeTimeController {

    private TeeTimeRepository teeTimeRepository;

    @Autowired
    public TeeTimeController(TeeTimeRepository teeTimeRepository) {
        this.teeTimeRepository = teeTimeRepository;
    }

    @GetMapping(value = "/all")
    public List<TeeTimeModel> getTeeTimes() {
       return teeTimeRepository.findAll();
    }
    @GetMapping(value = "/{date}")
    public List<TeeTimeModel> getTeeTimesForDay(@PathVariable String date) {
        return teeTimeRepository.findAllByDate(date);
    }

    @PostMapping(value = "/add")
    public String addSingleTime(@RequestBody TeeTimeModel teeTimeModel) {
        teeTimeRepository.save(teeTimeModel);
        return "Tee time added!";
    }
}
