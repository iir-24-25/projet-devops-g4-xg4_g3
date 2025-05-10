package com.example.mobile_backend.controller;

import com.example.mobile_backend.model.Favoris;
import com.example.mobile_backend.service.FavorisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favoris")
public class FavorisController {
    @Autowired
    private FavorisService service;

    @GetMapping
    public List<Favoris> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Favoris add(@RequestBody Favoris favoris) {
        return service.add(favoris);
    }

    @GetMapping("/utilisateur/{utilisateurId}")
    public Favoris getByUtilisateurId(@PathVariable String utilisateurId) {
        return service.getByUtilisateurId(utilisateurId);
    }
} 