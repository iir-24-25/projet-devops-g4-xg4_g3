<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <title>Dashboard Admin</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .sidebar {
            min-height: 100vh;
            background-color: #343a40;
            color: white;
        }
        .sidebar .nav-link {
            color: rgba(255,255,255,.75);
        }
        .sidebar .nav-link.active, .sidebar .nav-link:hover {
            color: white;
            background-color: rgba(255,255,255,.1);
        }
    </style>
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <!-- Sidebar -->
        <div class="col-md-2 sidebar p-3">
            <h4>Admin</h4>
            <hr>
            <ul class="nav flex-column">
                <li class="nav-item"><a class="nav-link active" href="#patients">Patients</a></li>
                <li class="nav-item"><a class="nav-link" href="#medecins">Médecins</a></li>
                <li class="nav-item"><a class="nav-link" href="../logout">Déconnexion</a></li>
            </ul>
        </div>
        <!-- Main content -->
        <div class="col-md-10 p-4">
            <h2 id="patients">Liste des Patients</h2>
            <button class="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#addPatientModal">Ajouter Patient</button>
            <table class="table table-bordered">
                <thead><tr><th>Nom</th><th>Prénom</th><th>Email</th><th>Adresse</th><th>Téléphone</th><th>Actions</th></tr></thead>
                <tbody>
                <c:forEach items="${patients}" var="p">
                    <tr>
                        <td>${p.nom}</td>
                        <td>${p.prenom}</td>
                        <td>${p.email}</td>
                        <td>${p.adresse}</td>
                        <td>${p.telephone}</td>
                        <td>
                            <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editPatientModal${p.id}">Modifier</button>
                            <form action="${pageContext.request.contextPath}/admin/deletePatient" method="post" style="display:inline;">
                                <input type="hidden" name="id" value="${p.id}" />
                                <button type="submit" class="btn btn-danger btn-sm">Supprimer</button>
                            </form>
                        </td>
                    </tr>
                    <div class="modal fade" id="editPatientModal${p.id}" tabindex="-1">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <form action="${pageContext.request.contextPath}/admin/updatePatient" method="post">
                            <div class="modal-header">
                              <h5 class="modal-title">Modifier Patient</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                              <input type="hidden" name="id" value="${p.id}" />
                              <div class="mb-3">
                                <label class="form-label">Nom</label>
                                <input type="text" class="form-control" name="nom" value="${p.nom}" required>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Prénom</label>
                                <input type="text" class="form-control" name="prenom" value="${p.prenom}" required>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" name="email" value="${p.email}" required>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Date de naissance</label>
                                <input type="date" class="form-control" name="dateNaissance" value="${p.dateNaissance}" required>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Adresse</label>
                                <input type="text" class="form-control" name="adresse" value="${p.adresse}" required>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Téléphone</label>
                                <input type="text" class="form-control" name="telephone" value="${p.telephone}" required>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Mot de passe</label>
                                <input type="password" class="form-control" name="password" value="${p.password}" required>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button type="submit" class="btn btn-primary">Enregistrer</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                </c:forEach>
                </tbody>
            </table>
            <h2 id="medecins" class="mt-5">Liste des Médecins</h2>
            <button class="btn btn-success mb-2" data-bs-toggle="modal" data-bs-target="#addMedecinModal">Ajouter Médecin</button>
            <table class="table table-bordered">
                <thead><tr><th>Nom</th><th>Prénom</th><th>Email</th><th>Spécialité</th><th>Actions</th></tr></thead>
                <tbody>
                <c:forEach items="${medecins}" var="m">
                    <tr>
                        <td>${m.nom}</td>
                        <td>${m.prenom}</td>
                        <td>${m.email}</td>
                        <td>${m.specialite}</td>
                        <td>
                            <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#editMedecinModal${m.id}">Modifier</button>
                            <form action="${pageContext.request.contextPath}/admin/deleteMedecin" method="post" style="display:inline;">
                                <input type="hidden" name="id" value="${m.id}" />
                                <button type="submit" class="btn btn-danger btn-sm">Supprimer</button>
                            </form>
                        </td>
                    </tr>
                    <div class="modal fade" id="editMedecinModal${m.id}" tabindex="-1">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <form action="${pageContext.request.contextPath}/admin/updateMedecin" method="post">
                            <div class="modal-header">
                              <h5 class="modal-title">Modifier Médecin</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                              <input type="hidden" name="id" value="${m.id}" />
                              <div class="mb-3">
                                <label class="form-label">Nom</label>
                                <input type="text" class="form-control" name="nom" value="${m.nom}" required>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Prénom</label>
                                <input type="text" class="form-control" name="prenom" value="${m.prenom}" required>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" name="email" value="${m.email}" required>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Spécialité</label>
                                <input type="text" class="form-control" name="specialite" value="${m.specialite}" required>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Adresse</label>
                                <input type="text" class="form-control" name="adresse" value="${m.adresse}" required>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Téléphone</label>
                                <input type="text" class="form-control" name="telephone" value="${m.telephone}" required>
                              </div>
                              <div class="mb-3">
                                <label class="form-label">Mot de passe</label>
                                <input type="password" class="form-control" name="password" value="${m.password}" required>
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button type="submit" class="btn btn-primary">Enregistrer</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                </c:forEach>
                </tbody>
            </table>
        </div>
    </div>
</div>
<!-- Modals d'ajout (à compléter pour le CRUD) -->
<div class="modal fade" id="addPatientModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Ajouter Patient</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form action="${pageContext.request.contextPath}/admin/addPatient" method="post">
          <div class="mb-3">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" name="nom" required>
          </div>
          <div class="mb-3">
            <label for="prenom" class="form-label">Prénom</label>
            <input type="text" class="form-control" id="prenom" name="prenom" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" required>
          </div>
          <div class="mb-3">
            <label for="dateNaissance" class="form-label">Date de naissance</label>
            <input type="date" class="form-control" id="dateNaissance" name="dateNaissance" required>
          </div>
          <div class="mb-3">
            <label for="adresse" class="form-label">Adresse</label>
            <input type="text" class="form-control" id="adresse" name="adresse" required>
          </div>
          <div class="mb-3">
            <label for="telephone" class="form-label">Téléphone</label>
            <input type="text" class="form-control" id="telephone" name="telephone" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Mot de passe</label>
            <input type="password" class="form-control" id="password" name="password" required>
          </div>
          <button type="submit" class="btn btn-success">Ajouter</button>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="addMedecinModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Ajouter Médecin</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form action="${pageContext.request.contextPath}/admin/addMedecin" method="post">
          <div class="mb-3">
            <label for="nomM" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nomM" name="nom" required>
          </div>
          <div class="mb-3">
            <label for="prenomM" class="form-label">Prénom</label>
            <input type="text" class="form-control" id="prenomM" name="prenom" required>
          </div>
          <div class="mb-3">
            <label for="emailM" class="form-label">Email</label>
            <input type="email" class="form-control" id="emailM" name="email" required>
          </div>
          <div class="mb-3">
            <label for="specialite" class="form-label">Spécialité</label>
            <input type="text" class="form-control" id="specialite" name="specialite" required>
          </div>
          <div class="mb-3">
            <label for="adresseM" class="form-label">Adresse</label>
            <input type="text" class="form-control" id="adresseM" name="adresse" required>
          </div>
          <div class="mb-3">
            <label for="telephoneM" class="form-label">Téléphone</label>
            <input type="text" class="form-control" id="telephoneM" name="telephone" required>
          </div>
          <div class="mb-3">
            <label for="passwordM" class="form-label">Mot de passe</label>
            <input type="password" class="form-control" id="passwordM" name="password" required>
          </div>
          <button type="submit" class="btn btn-success">Ajouter</button>
        </form>
      </div>
    </div>
  </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html> 