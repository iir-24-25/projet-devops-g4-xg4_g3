package com.example.servlet.admin;

import com.example.repository.MedecinRepository;
import com.example.util.MongoUtil;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/admin/deleteMedecin")
public class DeleteMedecinServlet extends HttpServlet {
    private MedecinRepository medecinRepository;

    @Override
    public void init() throws ServletException {
        medecinRepository = new MedecinRepository(MongoUtil.getDatabase());
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("id");
        medecinRepository.delete(id);
        response.sendRedirect(request.getContextPath() + "/admin/dashboard");
    }
} 