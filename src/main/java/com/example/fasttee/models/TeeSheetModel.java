package com.example.fasttee.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;

@Document(collection = "tee_sheets")
public class TeeSheetModel {

    @MongoId
    private String id;
    private String date;
    private List<TeeTimeModel> timesForDay;

    public TeeSheetModel(String date, List<TeeTimeModel> timesForDay){
        this.date = date;
        this.timesForDay = timesForDay;
    }

    public List<TeeTimeModel> getTimesForDay() {
        return timesForDay;
    }

    public void setTimesForDay(List<TeeTimeModel> timesForDay) {
        this.timesForDay = timesForDay;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
