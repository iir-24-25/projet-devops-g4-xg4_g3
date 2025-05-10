package com.example.mobile_backend.controller;

import com.example.mobile_backend.model.Paiement;
import com.example.mobile_backend.service.PaiementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/paiements")
public class PaiementController {
    @Autowired
    private PaiementService service;

    @GetMapping
    public List<Paiement> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Paiement add(@RequestBody Paiement paiement) {
        return service.add(paiement);
    }

    @GetMapping("/{id}")
    public Paiement getById(@PathVariable String id) {
        return service.getById(id);
    }
} 