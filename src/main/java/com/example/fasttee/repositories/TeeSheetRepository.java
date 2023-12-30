package com.example.fasttee.repositories;

import com.example.fasttee.models.TeeSheetModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeeSheetRepository extends MongoRepository<TeeSheetModel, String> {

}
