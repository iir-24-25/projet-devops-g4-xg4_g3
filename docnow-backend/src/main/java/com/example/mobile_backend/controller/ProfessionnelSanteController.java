package com.example.mobile_backend.controller;

import com.example.mobile_backend.model.ProfessionnelSante;
import com.example.mobile_backend.service.ProfessionnelSanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medecins")
public class ProfessionnelSanteController {
    @Autowired
    private ProfessionnelSanteService service;

    @GetMapping
    public List<ProfessionnelSante> getAll() {
        return service.getAll();
    }

    @PostMapping
    public ProfessionnelSante add(@RequestBody ProfessionnelSante medecin) {
        return service.add(medecin);
    }

    @GetMapping("/{id}")
    public ProfessionnelSante getById(@PathVariable String id) {
        return service.getById(id);
    }
} 