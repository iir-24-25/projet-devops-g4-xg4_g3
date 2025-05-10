package com.example.servlet.admin;

import com.example.model.Medecin;
import com.example.repository.MedecinRepository;
import com.example.util.MongoUtil;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/admin/addMedecin")
public class AddMedecinServlet extends HttpServlet {
    private MedecinRepository medecinRepository;

    @Override
    public void init() throws ServletException {
        medecinRepository = new MedecinRepository(MongoUtil.getDatabase());
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String nom = request.getParameter("nom");
        String prenom = request.getParameter("prenom");
        String email = request.getParameter("email");
        String specialite = request.getParameter("specialite");
        String adresse = request.getParameter("adresse");
        String telephone = request.getParameter("telephone");
        String password = request.getParameter("password");

        try {
            Medecin medecin = new Medecin(null, password, nom, prenom, email, specialite, telephone, adresse);
            medecinRepository.save(medecin);
            response.sendRedirect(request.getContextPath() + "/admin/dashboard");
        } catch (Exception e) {
            request.setAttribute("error", "Erreur lors de l'ajout du médecin");
            request.getRequestDispatcher("/admin/dashboard.jsp").forward(request, response);
        }
    }
} 