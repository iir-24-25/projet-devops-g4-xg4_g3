package com.example.servlet;

import com.example.model.RendezVous;
import com.example.model.Patient;
import com.example.repository.RendezVousRepository;
import com.example.util.MongoUtil;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@WebServlet("/patient/prendreRdv")
public class PrendreRdvServlet extends HttpServlet {
    private RendezVousRepository rendezVousRepository;

    @Override
    public void init() throws ServletException {
        rendezVousRepository = new RendezVousRepository(MongoUtil.getDatabase());
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession httpSession = request.getSession();
        Patient patient = (Patient) httpSession.getAttribute("user");
        
        if (patient == null) {
            response.sendRedirect("../login.jsp");
            return;
        }

        String medecinId = request.getParameter("medecinId");
        String dateStr = request.getParameter("date");
        String heure = request.getParameter("heure");
        String motif = request.getParameter("motif");

        try {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Date date = dateFormat.parse(dateStr);

            RendezVous rendezVous = new RendezVous();
            rendezVous.setPatientId(patient.getId());
            rendezVous.setMedecinId(medecinId);
            rendezVous.setDate(date);
            rendezVous.setHeure(heure);
            rendezVous.setMotif(motif);
            rendezVous.setStatut("CONFIRME");

            rendezVousRepository.save(rendezVous);

            response.sendRedirect("dashboard.jsp");
        } catch (ParseException e) {
            request.setAttribute("error", "Format de date invalide");
            request.getRequestDispatcher("dashboard.jsp").forward(request, response);
        } catch (Exception e) {
            request.setAttribute("error", "Une erreur est survenue lors de la prise de rendez-vous");
            request.getRequestDispatcher("dashboard.jsp").forward(request, response);
        }
    }
} 