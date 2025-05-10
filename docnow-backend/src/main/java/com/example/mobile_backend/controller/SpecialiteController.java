package com.example.mobile_backend.controller;

import com.example.mobile_backend.model.Specialite;
import com.example.mobile_backend.service.SpecialiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/specialites")
public class SpecialiteController {
    @Autowired
    private SpecialiteService specialiteService;

    @GetMapping
    public List<Specialite> getAllSpecialites() {
        return specialiteService.getAllSpecialites();
    }

    @PostMapping
    public Specialite addSpecialite(@RequestBody Specialite specialite) {
        return specialiteService.addSpecialite(specialite);
    }
} 