package com.example.fasttee.models;

import org.springframework.data.mongodb.core.mapping.Document;
import java.time.format.DateTimeFormatter;

@Document(collection = "tee_time_collection")
public class TeeTimeModel {
    private String date;
    private String time;
    private boolean fullyBooked;
    private int availableSpots;

    public TeeTimeModel(String date, String time, boolean fullyBooked, int availableSpots){
        this.time = time;
        this.date = date;
        this.fullyBooked = fullyBooked;
        this.availableSpots = availableSpots;
    }

    public boolean isFullyBooked() {
        return fullyBooked;
    }

    public void setFullyBooked(boolean fullyBooked) {
        this.fullyBooked = fullyBooked;
    }

    public int getAvailableSpots() {
        return availableSpots;
    }

    public void setAvailableSpots(int availableSpots) {
        this.availableSpots = availableSpots;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
