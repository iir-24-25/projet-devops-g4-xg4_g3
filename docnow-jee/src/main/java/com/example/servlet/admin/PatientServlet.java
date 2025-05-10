package com.example.servlet.admin;

import com.example.model.Patient;
import com.example.repository.PatientRepository;
import com.example.util.MongoUtil;
import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

@WebServlet("/admin/patients/*")
public class PatientServlet extends HttpServlet {
    private PatientRepository patientRepository;
    private Gson gson;

    @Override
    public void init() throws ServletException {
        patientRepository = new PatientRepository(MongoUtil.getDatabase());
        gson = new Gson();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String pathInfo = request.getPathInfo();
        
        if (pathInfo == null || pathInfo.equals("/")) {
            // Liste tous les patients
            List<Patient> patients = patientRepository.findAll();
            sendJsonResponse(response, patients);
        } else {
            // Récupère un patient spécifique
            String id = pathInfo.substring(1);
            Patient patient = patientRepository.findById(id);
            if (patient != null) {
                sendJsonResponse(response, patient);
            } else {
                response.sendError(HttpServletResponse.SC_NOT_FOUND);
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Patient patient = gson.fromJson(request.getReader(), Patient.class);
        patientRepository.save(patient);
        response.setStatus(HttpServletResponse.SC_CREATED);
        sendJsonResponse(response, patient);
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String pathInfo = request.getPathInfo();
        if (pathInfo == null || pathInfo.equals("/")) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        String id = pathInfo.substring(1);
        Patient patient = gson.fromJson(request.getReader(), Patient.class);
        patientRepository.update(id, patient);
        sendJsonResponse(response, patient);
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String pathInfo = request.getPathInfo();
        if (pathInfo == null || pathInfo.equals("/")) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        String id = pathInfo.substring(1);
        patientRepository.delete(id);
        response.setStatus(HttpServletResponse.SC_NO_CONTENT);
    }

    private void sendJsonResponse(HttpServletResponse response, Object data) throws IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(gson.toJson(data));
    }
} 