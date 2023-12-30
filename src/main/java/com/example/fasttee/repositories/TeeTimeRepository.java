package com.example.fasttee.repositories;

import com.example.fasttee.models.TeeTimeModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeeTimeRepository extends MongoRepository<TeeTimeModel, String> {
    List<TeeTimeModel> findAllByDate(String date);
    TeeTimeModel findByDateAndTime(String date, String time);
}
