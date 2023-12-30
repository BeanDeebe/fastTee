/*
 * This class represents the controller for managing TeeTime-related API endpoints.
 */
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
    /*
     * Endpoint to retrieve all TeeTimes.
     */
    @GetMapping(value = "/all")
    public List<TeeTimeModel> getTeeTimes() {
       return teeTimeRepository.findAll();
    }

    /*
     * Endpoint to retrieve TeeTimes for a specific date.
     * Uses @PathVariable to extract the date from the URL.
     */
    @GetMapping(value = "/{date}")
    public List<TeeTimeModel> getTeeTimesForDay(@PathVariable String date) {
        return teeTimeRepository.findAllByDate(date);
    }

    /*
     * Endpoint to retrieve a single TeeTime for a given date and time.
     * Uses @RequestParam to get parameters from the query string.
     */
    @GetMapping(value= "/getTime")
    public TeeTimeModel getSingleTeeTime(
            @RequestParam String date,
            @RequestParam String time ) {
        return teeTimeRepository.findByDateAndTime(date, time);

    }

    /*
     * Endpoint to add a new TeeTime.
     * Uses @RequestBody to map the incoming JSON to TeeTimeModel.
     */
    @PostMapping(value = "/add")
    public String addSingleTime(@RequestBody TeeTimeModel teeTimeModel) {
        teeTimeRepository.save(teeTimeModel);
        return "Tee time added!";
    }
}
