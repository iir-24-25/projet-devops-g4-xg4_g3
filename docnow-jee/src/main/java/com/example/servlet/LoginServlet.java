package com.example.servlet;

import com.example.model.Patient;
import com.example.model.Medecin;
import com.example.repository.PatientRepository;
import com.example.repository.MedecinRepository;
import com.example.util.MongoUtil;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    private PatientRepository patientRepository;
    private MedecinRepository medecinRepository;

    @Override
    public void init() throws ServletException {
        patientRepository = new PatientRepository(MongoUtil.getDatabase());
        medecinRepository = new MedecinRepository(MongoUtil.getDatabase());
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Admin statique
        if ("admin".equals(username) && "admin".equals(password)) {
            HttpSession httpSession = request.getSession();
            httpSession.setAttribute("user", "admin");
            httpSession.setAttribute("role", "ADMIN");
            response.sendRedirect("admin/dashboard.jsp");
            return;
        }

        // Patient
        Patient patient = patientRepository.findByEmail(username);
        if (patient != null && patient.getPassword().equals(password)) {
            HttpSession httpSession = request.getSession();
            httpSession.setAttribute("user", patient);
            httpSession.setAttribute("role", "PATIENT");
            response.sendRedirect("patient/dashboard.jsp");
            return;
        }

        // Medecin
        Medecin medecin = medecinRepository.findByEmail(username);
        if (medecin != null && medecin.getPassword().equals(password)) {
            HttpSession httpSession = request.getSession();
            httpSession.setAttribute("user", medecin);
            httpSession.setAttribute("role", "MEDECIN");
            response.sendRedirect("medecin/dashboard.jsp");
            return;
        }

        request.setAttribute("error", "Nom d'utilisateur ou mot de passe incorrect");
        request.getRequestDispatcher("login.jsp").forward(request, response);
    }
} 