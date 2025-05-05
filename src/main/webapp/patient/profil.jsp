<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.example.model.Patient" %>
<%
    Patient patient = (Patient) session.getAttribute("user");
    if (patient == null) {
        response.sendRedirect("../login.jsp");
        return;
    }
%>
<!DOCTYPE html>
<html>
<head>
    <title>Profil Patient</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-5">
    <h2>Mon profil</h2>
    <form action="modifierProfil" method="post">
        <div class="mb-3">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" name="nom" value="<%= patient.getNom() %>" required>
        </div>
        <div class="mb-3">
            <label for="prenom" class="form-label">Prénom</label>
            <input type="text" class="form-control" id="prenom" name="prenom" value="<%= patient.getPrenom() %>" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" value="<%= patient.getEmail() %>" required>
        </div>
        <div class="mb-3">
            <label for="dateNaissance" class="form-label">Date de naissance</label>
            <input type="date" class="form-control" id="dateNaissance" name="dateNaissance" value="<%= new java.text.SimpleDateFormat("yyyy-MM-dd").format(patient.getDateNaissance()) %>" required>
        </div>
        <div class="mb-3">
            <label for="adresse" class="form-label">Adresse</label>
            <input type="text" class="form-control" id="adresse" name="adresse" value="<%= patient.getAdresse() %>" required>
        </div>
        <div class="mb-3">
            <label for="telephone" class="form-label">Téléphone</label>
            <input type="text" class="form-control" id="telephone" name="telephone" value="<%= patient.getTelephone() %>" required>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Mot de passe</label>
            <input type="password" class="form-control" id="password" name="password" value="<%= patient.getPassword() %>" required>
        </div>
        <button type="submit" class="btn btn-primary">Enregistrer</button>
        <a href="dashboard.jsp" class="btn btn-secondary ms-2">Annuler</a>
    </form>
</div>
</body>
</html> 