package com.example.fasttee.repositories;

import com.example.fasttee.models.UserModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {
    UserModel findUserById(String id);

    void deleteUserById(String id);
}

