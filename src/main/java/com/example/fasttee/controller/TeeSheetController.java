package com.example.fasttee.controller;

import com.example.fasttee.repositories.TeeSheetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/api/teesheet")
public class TeeSheetController {

    private final TeeSheetRepository teeSheetRepository;


    @Autowired
    public TeeSheetController(TeeSheetRepository teeSheetRepository){
        this.teeSheetRepository = teeSheetRepository;
    }
}
