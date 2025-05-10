# --- Étape 1 : compilation Maven ---
    FROM maven:3.8.6-eclipse-temurin-17 AS builder
    WORKDIR /workspace
    
    # Copie du POM et du code source
    COPY pom.xml .
    COPY src ./src
    
    # Compilation sans les tests pour accélérer
    RUN mvn clean package -DskipTests
    
    # --- Étape 2 : image Payara contenant la WAR générée ---
    FROM payara/server-full:6.2023.3
    WORKDIR $PAYARA_PATH/deployments
    
    # On récupère la WAR construite précédemment
    COPY --from=builder /workspace/target/docnow-jee.war .
    
    # Exposition du port par défaut de Payara
    EXPOSE 8080
    
    # Aucun ENTRYPOINT nécessaire : Payara déploie automatiquement les .war
    