package com.example.fasttee.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.format.DateTimeFormatter;

@Document(collection = "tee_time_collection")
public class TeeTimeModel {
    private DateTimeFormatter dateFormatter;
    private DateTimeFormatter timeFormatter;
    private boolean fullyBooked;
    private int availableSpots;

    public TeeTimeModel(DateTimeFormatter dateFormatter, DateTimeFormatter timeFormatter, boolean fullyBooked, int availableSpots){
        this.timeFormatter = timeFormatter;
        this.dateFormatter = dateFormatter;
        this.fullyBooked = fullyBooked;
        this.availableSpots = availableSpots;
    }
    public DateTimeFormatter getDateFormatter() {
        return dateFormatter;
    }

    public void setDateFormatter(DateTimeFormatter dateFormatter) {
        this.dateFormatter = dateFormatter;
    }

    public DateTimeFormatter getTimeFormatter() {
        return timeFormatter;
    }

    public void setTimeFormatter(DateTimeFormatter timeFormatter) {
        this.timeFormatter = timeFormatter;
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
}
