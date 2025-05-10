package com.example.mobile_backend.controller;

import com.example.mobile_backend.model.Message;
import com.example.mobile_backend.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {
    @Autowired
    private MessageService service;

    @GetMapping
    public List<Message> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Message add(@RequestBody Message message) {
        return service.add(message);
    }

    @GetMapping("/{id}")
    public Message getById(@PathVariable String id) {
        return service.getById(id);
    }
} 