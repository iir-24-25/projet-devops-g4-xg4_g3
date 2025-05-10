package com.example.mobile_backend.service;

import com.example.mobile_backend.model.Message;
import com.example.mobile_backend.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository repository;

    public List<Message> getAll() {
        return repository.findAll();
    }

    public Message add(Message message) {
        return repository.save(message);
    }

    public Message getById(String id) {
        return repository.findById(id).orElse(null);
    }
} 