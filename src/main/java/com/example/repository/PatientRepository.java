package com.example.repository;

import com.example.model.Patient;
import com.example.util.MongoUtil;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Updates;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class PatientRepository {
    private final MongoCollection<Document> collection;

    public PatientRepository(MongoDatabase database) {
        this.collection = database.getCollection("patients");
    }

    public void save(Patient patient) {
        Document doc = new Document("username", patient.getUsername())
                .append("password", patient.getPassword())
                .append("nom", patient.getNom())
                .append("prenom", patient.getPrenom())
                .append("email", patient.getEmail())
                .append("dateNaissance", patient.getDateNaissance())
                .append("adresse", patient.getAdresse())
                .append("telephone", patient.getTelephone())
                .append("role", "PATIENT");
        collection.insertOne(doc);
        patient.setId(doc.getObjectId("_id").toHexString());
    }

    public Patient findByUsernameAndPassword(String username, String password) {
        Document doc = collection.find(Filters.and(
                Filters.eq("username", username),
                Filters.eq("password", password)
        )).first();
        if (doc == null) return null;
        Patient patient = new Patient();
        patient.setId(doc.getObjectId("_id").toHexString());
        patient.setUsername(doc.getString("username"));
        patient.setPassword(doc.getString("password"));
        patient.setNom(doc.getString("nom"));
        patient.setPrenom(doc.getString("prenom"));
        patient.setEmail(doc.getString("email"));
        patient.setDateNaissance(doc.getDate("dateNaissance"));
        patient.setAdresse(doc.getString("adresse"));
        patient.setTelephone(doc.getString("telephone"));
        patient.setRole("PATIENT");
        return patient;
    }

    public List<Patient> findAll() {
        List<Patient> patients = new ArrayList<>();
        collection.find().forEach(doc -> patients.add(documentToPatient(doc)));
        return patients;
    }

    public Patient findById(String id) {
        Document doc = collection.find(Filters.eq("_id", new ObjectId(id))).first();
        return doc != null ? documentToPatient(doc) : null;
    }

    public Patient findByEmail(String email) {
        Document doc = collection.find(Filters.eq("email", email)).first();
        return doc != null ? documentToPatient(doc) : null;
    }

    public void update(String id, Patient patient) {
        collection.updateOne(
            Filters.eq("_id", new ObjectId(id)),
            Updates.combine(
                Updates.set("nom", patient.getNom()),
                Updates.set("prenom", patient.getPrenom()),
                Updates.set("email", patient.getEmail()),
                Updates.set("telephone", patient.getTelephone()),
                Updates.set("dateNaissance", patient.getDateNaissance()),
                Updates.set("adresse", patient.getAdresse())
            )
        );
    }

    public void delete(String id) {
        collection.deleteOne(Filters.eq("_id", new ObjectId(id)));
    }

    private Patient documentToPatient(Document doc) {
        Patient patient = new Patient();
        patient.setId(doc.getObjectId("_id").toString());
        patient.setUsername(doc.getString("username"));
        patient.setPassword(doc.getString("password"));
        patient.setNom(doc.getString("nom"));
        patient.setPrenom(doc.getString("prenom"));
        patient.setEmail(doc.getString("email"));
        patient.setDateNaissance(doc.getDate("dateNaissance"));
        patient.setAdresse(doc.getString("adresse"));
        patient.setTelephone(doc.getString("telephone"));
        patient.setRole("PATIENT");
        return patient;
    }
} 