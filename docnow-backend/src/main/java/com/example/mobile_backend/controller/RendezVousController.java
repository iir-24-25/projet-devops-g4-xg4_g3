package com.example.mobile_backend.controller;

import com.example.mobile_backend.model.RendezVous;
import com.example.mobile_backend.service.RendezVousService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rendezvous")
public class RendezVousController {
    @Autowired
    private RendezVousService service;

    @GetMapping
    public List<RendezVous> getAll() {
        return service.getAll();
    }

    @PostMapping
    public RendezVous add(@RequestBody RendezVous rdv) {
        return service.add(rdv);
    }

    @GetMapping("/{id}")
    public RendezVous getById(@PathVariable String id) {
        return service.getById(id);
    }
} 