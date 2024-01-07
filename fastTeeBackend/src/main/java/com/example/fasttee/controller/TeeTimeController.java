/*
 * This class represents the controller for managing TeeTime-related API endpoints.
 */
package com.example.fasttee.controller;

import com.example.fasttee.helpers.GenerateTeeTimes;
import com.example.fasttee.models.TeeTimeModel;
import com.example.fasttee.repositories.TeeTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.util.List;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(value="/api/teetime")
public class TeeTimeController {
    private final TeeTimeRepository teeTimeRepository;
    @Autowired
    public TeeTimeController(TeeTimeRepository teeTimeRepository) {
        this.teeTimeRepository = teeTimeRepository;
    }

    /*
     * Endpoint to retrieve TeeTimes for a specific date.
     * Uses @PathVariable to extract the date from the URL.
     */
    @GetMapping(value="/{date}")
    public List<TeeTimeModel> getTeeTimesForDay(@PathVariable String date) throws FileNotFoundException {

        if (teeTimeRepository.existsByDate(date)) {
            return teeTimeRepository.findAllByDate(date);
        } else {
            List<TeeTimeModel> newTeeSheet = new GenerateTeeTimes(date).generate();
            for (TeeTimeModel time : newTeeSheet) {
                teeTimeRepository.save(time);
            }
            return newTeeSheet;
        }
    }

}
