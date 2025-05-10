package com.example.servlet.admin;

import com.example.repository.PatientRepository;
import com.example.repository.MedecinRepository;
import com.example.util.MongoUtil;
import com.example.model.Patient;
import com.example.model.Medecin;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/admin/dashboard")
public class AdminDashboardServlet extends HttpServlet {
    private PatientRepository patientRepository;
    private MedecinRepository medecinRepository;

    @Override
    public void init() throws ServletException {
        patientRepository = new PatientRepository(MongoUtil.getDatabase());
        medecinRepository = new MedecinRepository(MongoUtil.getDatabase());
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Patient> patients = patientRepository.findAll();
        List<Medecin> medecins = medecinRepository.findAll();
        request.setAttribute("patients", patients);
        request.setAttribute("medecins", medecins);
        request.getRequestDispatcher("/admin/dashboard.jsp").forward(request, response);
    }
} 