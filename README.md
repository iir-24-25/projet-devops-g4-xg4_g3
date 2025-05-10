# DocNow

**DocNow** est une plateforme de gestion de rendez-vous médicaux, répartie en trois modules :

* **docnow-backend** : API Spring Boot (Java 17) pour la logique métier et l’accès aux données.
* **docnow-jee** : Application Java EE (Servlet/JSP) pour l’administration et la gestion interne.
* **docnow-frontend** : Client Expo (React Native) pour la partie mobile et web.

---

## Prérequis

* **Java 17 SDK** (pour `docnow-backend` et `docnow-jee`)
* **Maven 3.6+**
* **Node 18+** et **npm 8+** (pour `docnow-frontend`)
* **Expo CLI** (installé globalement ou en dépendance)
* Un serveur d’application Java EE (GlassFish, WildFly...) pour déployer `docnow-jee`

---

## Installation et exécution

Cloner le dépôt :

```bash
git clone https://github.com/sabiressaad/DocNow.git
cd DocNow
```

### 1) Backend Spring Boot

```bash
cd docnow-backend
# Compile & package
mvn clean package
# Lancer l'API sur http://localhost:8080
mvn spring-boot:run
```

### 2) Application Java EE

```bash
cd docnow-jee
# Compiler & packager
mvn clean package
# Déployer le fichier WAR généré dans votre serveur d'applications
# ex : copy target/docnow-jee.war -> GlassFish autodeploy
```

### 3) Frontend Mobile & Web (Expo)

```bash
cd docnow-frontend
# Installer les dépendances
npm install
# Export web
npm run build       # ou "expo export:web"
# Pour lancer localement (mobile/web)
expo start
```

---

## Intégration Continue (CI)

Un pipeline GitHub Actions est configuré dans `.github/workflows/ci.yml`. À chaque push/PR sur `main`, trois jobs sont exécutés en parallèle :

1. **build-backend** : Maven package du module Spring Boot.
2. **build-jee** : Maven package du module Java EE.
3. **build-frontend** : `npm install` + export web Expo.

Vous pouvez suivre l’état du pipeline sur l’onglet **Actions** du dépôt.

---

## Contribuer

1. Forkez ce dépôt.
2. Créez une branche (`git checkout -b feat/ma-feature`).
3. Faites vos modifications et committez (`git commit -m "feat: description courte"`).
4. Poussez sur votre fork (`git push origin feat/ma-feature`).
5. Ouvrez une Pull Request.

---

## Licence

MIT © Sabiressaad
