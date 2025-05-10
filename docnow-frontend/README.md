# Résumé du projet et DevOps

---

### Projet et Contexte

- L'utilisateur travaille sur un projet médical avec :
  - Un frontend mobile en React Native (Expo)
  - Un backend Spring Boot (MongoDB)
  - Un frontend web JEE/JSP
- Il souhaite connecter le frontend mobile au backend, tester la liaison, et rendre l'application dynamique (pas de données statiques).

---

### Backend Spring Boot

- Entités, repositories, services et contrôleurs générés pour :
  - Patient, ProfessionnelSante, Specialite, RendezVous, Message, Teleconsultation, Favoris, Paiement, Avis
- Endpoints REST exposés pour toutes les entités.
- Endpoint de login simple pour Patient et Médecin.
- Configuration MongoDB vérifiée.
- Tests des endpoints avec Postman et MongoDB Compass (succès).

---

### Frontend Mobile (React Native)

- Utilisation d'appels API réels (login, signup, ajout rendez-vous, favoris, affichage médecins dynamiques, etc.)
- Remplacement des données statiques par des fetch/axios vers le backend.
- Corrections de typage TypeScript.
- Conseils sur la configuration réseau (URL API selon plateforme, firewall, etc.).

---

### Frontend Web (JEE/JSP)

- Gestion des erreurs 404 et de port déjà utilisé (Tomcat/Spring Boot).
- Conseils sur le changement de port, contexte de déploiement, et copie des fichiers JSP.

---

### Intégration Continue (CI) et Déploiement Continu (CD)

- Pipeline GitHub Actions avec :
  - build-backend (Spring Boot)
  - build-jee (JEE)
  - build-frontend (Expo/React Native web)
- Script build frontend corrigé pour `expo export`.
- Déploiement continu du frontend sur GitHub Pages (`deploy-frontend`).
- Exemples de jobs pour déployer le backend (JAR) et le JEE (WAR sur Tomcat) via SSH.
- Utilisation de secrets GitHub pour le déploiement.

---

### Conseils DevOps et Livrables

- Rapport, backlog, maquettes, plan de sprints
- Structure de projet, README, conventions Git
- CI/CD complet (build, tests, déploiement)
- Dockerfile, docker-compose, monitoring/logging (Prometheus, ELK)
- Documentation sur le déploiement et l'accès à l'application

---

### Points techniques abordés

- Gestion des ports et contextes Tomcat/Spring Boot
- Correction des erreurs de typage TypeScript
- Configuration CORS pour Spring Boot
- Utilisation de secrets GitHub pour le déploiement SSH
- Adaptation des scripts npm pour Expo web
- Conseils sur la gestion des URLs d'API selon la plateforme (web, mobile, émulateur)

---

### État final

- Le pipeline CI/CD fonctionne (builds verts sur GitHub Actions).
- Le frontend, backend et JEE sont prêts à être déployés automatiquement.
- L'utilisateur a toutes les instructions pour finaliser la conteneurisation, le monitoring, et la documentation du projet.

---

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
