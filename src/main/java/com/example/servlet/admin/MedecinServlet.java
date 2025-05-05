package com.example.servlet.admin;

import com.example.model.Medecin;
import com.example.repository.MedecinRepository;
import com.example.util.MongoUtil;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

@WebServlet("/admin/medecins/*")
public class MedecinServlet extends HttpServlet {
    private MedecinRepository medecinRepository;
    private Gson gson;

    @Override
    public void init() throws ServletException {
        medecinRepository = new MedecinRepository(MongoUtil.getDatabase());
        gson = new Gson();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String pathInfo = request.getPathInfo();
        
        if (pathInfo == null || pathInfo.equals("/")) {
            // Liste tous les médecins
            List<Medecin> medecins = medecinRepository.findAll();
            sendJsonResponse(response, medecins);
        } else {
            // Récupère un médecin spécifique
            String id = pathInfo.substring(1);
            Medecin medecin = medecinRepository.findById(id);
            if (medecin != null) {
                sendJsonResponse(response, medecin);
            } else {
                response.sendError(HttpServletResponse.SC_NOT_FOUND);
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Medecin medecin = gson.fromJson(request.getReader(), Medecin.class);
        medecinRepository.save(medecin);
        response.setStatus(HttpServletResponse.SC_CREATED);
        sendJsonResponse(response, medecin);
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String pathInfo = request.getPathInfo();
        if (pathInfo == null || pathInfo.equals("/")) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        String id = pathInfo.substring(1);
        Medecin medecin = gson.fromJson(request.getReader(), Medecin.class);
        medecinRepository.update(id, medecin);
        sendJsonResponse(response, medecin);
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String pathInfo = request.getPathInfo();
        if (pathInfo == null || pathInfo.equals("/")) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        String id = pathInfo.substring(1);
        medecinRepository.delete(id);
        response.setStatus(HttpServletResponse.SC_NO_CONTENT);
    }

    private void sendJsonResponse(HttpServletResponse response, Object data) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(gson.toJson(data));
    }
} 