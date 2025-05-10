package com.example.mobile_backend.controller;

import com.example.mobile_backend.model.Teleconsultation;
import com.example.mobile_backend.service.TeleconsultationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/teleconsultations")
public class TeleconsultationController {
    @Autowired
    private TeleconsultationService service;

    @GetMapping
    public List<Teleconsultation> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Teleconsultation add(@RequestBody Teleconsultation teleconsultation) {
        return service.add(teleconsultation);
    }

    @GetMapping("/{id}")
    public Teleconsultation getById(@PathVariable String id) {
        return service.getById(id);
    }
} 