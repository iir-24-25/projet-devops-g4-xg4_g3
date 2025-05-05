package com.example.servlet.admin;

import com.example.model.Patient;
import com.example.repository.PatientRepository;
import com.example.util.MongoUtil;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

@WebServlet("/admin/updatePatient")
public class UpdatePatientServlet extends HttpServlet {
    private PatientRepository patientRepository;

    @Override
    public void init() throws ServletException {
        patientRepository = new PatientRepository(MongoUtil.getDatabase());
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("id");
        String nom = request.getParameter("nom");
        String prenom = request.getParameter("prenom");
        String email = request.getParameter("email");
        String dateNaissanceStr = request.getParameter("dateNaissance");
        String adresse = request.getParameter("adresse");
        String telephone = request.getParameter("telephone");
        String password = request.getParameter("password");

        try {
            Date dateNaissance = new SimpleDateFormat("yyyy-MM-dd").parse(dateNaissanceStr);
            Patient patient = new Patient(null, password, nom, prenom, email, dateNaissance, adresse, telephone);
            patientRepository.update(id, patient);
            response.sendRedirect(request.getContextPath() + "/admin/dashboard");
        } catch (Exception e) {
            request.setAttribute("error", "Erreur lors de la modification du patient");
            request.getRequestDispatcher("/admin/dashboard.jsp").forward(request, response);
        }
    }
} 