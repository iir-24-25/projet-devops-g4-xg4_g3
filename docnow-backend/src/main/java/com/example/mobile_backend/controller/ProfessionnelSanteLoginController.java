package com.example.mobile_backend.controller;

import com.example.mobile_backend.model.ProfessionnelSante;
import com.example.mobile_backend.repository.ProfessionnelSanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
public class ProfessionnelSanteLoginController {
    @Autowired
    private ProfessionnelSanteRepository medecinRepository;

    @PostMapping("/medecin")
    public ProfessionnelSante loginMedecin(@RequestBody ProfessionnelSante login) {
        return medecinRepository.findAll().stream()
            .filter(m -> m.getEmail().equals(login.getEmail()) && m.getMotDePasse().equals(login.getMotDePasse()))
            .findFirst()
            .orElse(null);
    }
} 