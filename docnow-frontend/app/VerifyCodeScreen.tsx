import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const VerifyCodeScreen = () => {
  const [code, setCode] = useState('');
  const router = useRouter();

  const handleVerifyCode = () => {
    // Logique pour vérifier le code (simulée ici)
    console.log('Code:', code);

    // Si la vérification est réussie, naviguer vers la page de login
    router.push('/login');  // Assurez-vous que le chemin '/login' correspond bien à votre page de connexion
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* Header avec le bouton retour et le titre */}
      <View style={styles.header}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.push('/forgotPassword')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        {/* Titre */}
        <Text style={styles.title}>Enter the Verification Code</Text>
      </View>

      {/* Formulaire pour entrer le code */}
      <Text style={styles.label}>Verification Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter code"
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
        <Text style={styles.buttonText}>Verify Code</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/forgotPassword')}>
        <Text style={styles.link}>Back to Forgot Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
  },
  backButton: {
    paddingRight: 10,
  },
  title: {
    fontSize: 24,  // Ajustez la taille de la police pour l'adapter à la taille de l'écran
    fontWeight: 'bold',
    color: '#000',
    flexWrap: 'wrap',  // Permet au texte de se répartir sur plusieurs lignes si nécessaire
    maxWidth: '80%',  // Limite la largeur du texte pour éviter qu'il dépasse
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'center',
  },
});
