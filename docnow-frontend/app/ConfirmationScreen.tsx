import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';


export default function ConfirmationScreen() {
      const router = useRouter();
    
  const { 
    doctor, 
    selectedDay, 
    selectedTime, 
    patientName, 
    age, 
    gender, 
    consultationMode, 
    problemDescription 
  } = useLocalSearchParams();

  const parsedDoctor = doctor ? JSON.parse(doctor) : null;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Récapitulatif de Rendez-vous</Text>

        {/* Informations du médecin */}
        {parsedDoctor && (
          <View style={styles.section}>
            <Text style={styles.label}>Médecin :</Text>
            <Text style={styles.value}>{parsedDoctor.name}</Text>
            <Text style={styles.value}>{parsedDoctor.specialty}</Text>
          </View>
        )}

        {/* Date et Heure */}
        <View style={styles.section}>
          <Text style={styles.label}>Date :</Text>
          <Text style={styles.value}>{selectedDay} - {selectedTime}</Text>
        </View>

        {/* Informations du patient */}
        <View style={styles.section}>
          <Text style={styles.label}>Nom du patient :</Text>
          <Text style={styles.value}>{patientName || 'Non renseigné'}</Text>

          <Text style={styles.label}>Âge :</Text>
          <Text style={styles.value}>{age || 'Non renseigné'}</Text>

          <Text style={styles.label}>Genre :</Text>
          <Text style={styles.value}>{gender || 'Non renseigné'}</Text>
        </View>

        {/* Mode de consultation */}
        <View style={styles.section}>
          <Text style={styles.label}>Mode de consultation :</Text>
          <Text style={styles.value}>{consultationMode || 'En ligne'}</Text>
        </View>

        {/* Description du problème */}
        <View style={styles.section}>
          <Text style={styles.label}>Description du problème :</Text>
          <Text style={styles.value}>{problemDescription || 'Aucune description'}</Text>
        </View>

        {/* Boutons d'action */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.confirmButton, { flex: 1, marginRight: 8 }]}     
          onPress={() => router.push('/ConfirmationSuccessScreen')}
          >
            <Text style={styles.confirmButtonText}>Confirmer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.cancelButton, { flex: 1, marginLeft: 8 }]}
                    onPress={() => router.push('/BookScreen')}
>
            <Text style={styles.cancelButtonText}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 90,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  confirmButton: {
    backgroundColor: '#00C853',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#D50000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});