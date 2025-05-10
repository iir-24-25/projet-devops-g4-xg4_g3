package com.example.mobile_backend.repository;

import com.example.mobile_backend.model.Message;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MessageRepository extends MongoRepository<Message, String> {
} 