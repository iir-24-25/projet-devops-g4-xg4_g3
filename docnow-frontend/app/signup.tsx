// app/InformationUserScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function InformationUserScreen() {
  const router = useRouter();

  // Données initiales
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+33 6 12 34 56 78',
    address: 'Paris, France',
    birthDate: new Date('1990-01-01'), // valeur initiale
  });

  // État pour la date en texte
  const [birthDateText, setBirthDateText] = useState('01/01/1990');

  const handleChange = (field: string, value: string) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  const formatDateToDisplay = (date: Date) => {
    return date.toLocaleDateString('fr-FR'); // JJ/MM/AAAA
  };

  const handleSave = async () => {
    // Validation simple du format JJ/MM/AAAA
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regex.test(birthDateText)) {
      Alert.alert('Erreur', 'Veuillez entrer une date valide au format JJ/MM/AAAA.');
      return;
    }
    const [day, month, year] = birthDateText.split('/');
    const parsedDate = new Date(`${year}-${month}-${day}`);
    if (isNaN(parsedDate.getTime())) {
      Alert.alert('Erreur', 'La date saisie est invalide.');
      return;
    }
    setUser({ ...user, birthDate: parsedDate });
    try {
      const response = await fetch('http://localhost:8080/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: user.name,
          prenom: '',
          email: user.email,
          telephone: user.phone,
          adresse: user.address,
          motDePasse: 'azerty'
        })
      });
      const data = await response.json();
      if (data && data.id) {
        Alert.alert('Succès', 'Compte créé avec succès !');
        router.push('/login');
      } else {
        Alert.alert('Erreur', 'Impossible de créer le compte');
      }
    } catch (error) {
      Alert.alert('Erreur', 'Erreur de connexion au serveur');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Mes Informations</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Nom */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nom</Text>
          <TextInput
            style={styles.input}
            value={user.name}
            onChangeText={(text) => handleChange('name', text)}
          />
        </View>

        {/* Email */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={user.email}
            keyboardType="email-address"
            onChangeText={(text) => handleChange('email', text)}
          />
        </View>

        {/* Téléphone */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Téléphone</Text>
          <TextInput
            style={styles.input}
            value={user.phone}
            keyboardType="phone-pad"
            onChangeText={(text) => handleChange('phone', text)}
          />
        </View>

        {/* Adresse */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Adresse</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            value={user.address}
            multiline
            numberOfLines={3}
            onChangeText={(text) => handleChange('address', text)}
          />
        </View>

        {/* Date de naissance (manuelle) */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>Date de naissance</Text>
          <TextInput
            style={styles.input}
            placeholder="JJ/MM/AAAA"
            value={birthDateText}
            onChangeText={setBirthDateText}
            keyboardType="numeric"
            placeholderTextColor="#999"
          />
        </View>

        {/* Bouton Enregistrer */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Enregistrer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#007AFF',
  },
  scrollContent: {
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});