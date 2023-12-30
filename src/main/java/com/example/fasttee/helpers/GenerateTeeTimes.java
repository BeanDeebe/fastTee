package com.example.fasttee.helpers;

import com.example.fasttee.models.TeeTimeModel;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class GenerateTeeTimes {
    private final String date;

    public GenerateTeeTimes(String date) {
       this.date = date;
    }

    public List<TeeTimeModel> generate() throws FileNotFoundException {
        TeeTimeModel teeTime;
        List<TeeTimeModel> times = new ArrayList<>();
        String filepath = "src/main/java/com/example/fasttee/helpers/times.txt";
        BufferedReader reader = new BufferedReader(new FileReader(filepath));

        try {
            String line = reader.readLine();

            while (line != null){
               teeTime = new TeeTimeModel(date, line, false, 4);
               times.add(teeTime);
               line = reader.readLine();
            }

            return times;

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
