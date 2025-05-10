package com.example.mobile_backend.controller;

import com.example.mobile_backend.model.Avis;
import com.example.mobile_backend.service.AvisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/avis")
public class AvisController {
    @Autowired
    private AvisService service;

    @GetMapping
    public List<Avis> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Avis add(@RequestBody Avis avis) {
        return service.add(avis);
    }

    @GetMapping("/medecin/{medecinId}")
    public List<Avis> getByMedecinId(@PathVariable String medecinId) {
        return service.getByMedecinId(medecinId);
    }

    @GetMapping("/patient/{patientId}")
    public List<Avis> getByPatientId(@PathVariable String patientId) {
        return service.getByPatientId(patientId);
    }
} 