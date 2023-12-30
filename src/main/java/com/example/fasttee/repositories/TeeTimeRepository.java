package com.example.fasttee.repositories;

import com.example.fasttee.models.TeeTimeModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeeTimeRepository extends MongoRepository<TeeTimeModel, String> {

}
