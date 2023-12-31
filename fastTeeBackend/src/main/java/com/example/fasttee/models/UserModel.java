package com.example.fasttee.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.ArrayList;


@Document (collection = "user_collection")
public class UserModel {

    @MongoId
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private ArrayList<ArrayList<String>> bookedTeeTimes;
    public UserModel(){}

    public UserModel(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.bookedTeeTimes = new ArrayList<>();
    }
    public void addTeeTime(ArrayList<String> teeTimeDetails) {
        bookedTeeTimes.add(teeTimeDetails);
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    @Override
    public String toString() {
        return "{\n\tfirstName: " + firstName + ",\n\tlastName: " + lastName + "\n}";
    }

    public ArrayList<ArrayList<String>> getBookedTeeTimes() {
        return bookedTeeTimes;
    }

    public void setBookedTeeTimes(ArrayList<ArrayList<String>> bookedTeeTimes) {
        this.bookedTeeTimes = bookedTeeTimes;
    }
}
