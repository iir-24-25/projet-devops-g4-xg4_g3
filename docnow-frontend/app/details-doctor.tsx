import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';

const DoctorDetails = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const doctor = JSON.parse(params.doctor as string);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Détails du Docteur</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Photo et infos principales */}
        <View style={styles.profileSection}>
          <Image source={doctor.profilePicture} style={styles.profileImage} />
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.specialty}>{doctor.specialty}</Text>
          
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={20} color="#FFD700" />
            <Text style={styles.ratingText}>{doctor.rating}</Text>
            <Text style={styles.consultationsText}>({doctor.consultations} consultations)</Text>
          </View>
        </View>

        {/* Section À propos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>À propos</Text>
          <Text style={styles.sectionContent}>
            Spécialiste en {doctor.specialty} avec plus de 10 ans d'expérience. Diplômé de l'Université de Paris.
          </Text>
        </View>

        {/* Section Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <View style={styles.contactItem}>
            <Ionicons name="call" size={20} color="#007AFF" />
            <Text style={styles.contactText}>+33 6 12 34 56 78</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="mail" size={20} color="#007AFF" />
            <Text style={styles.contactText}>contact@docteur.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Ionicons name="location" size={20} color="#007AFF" />
            <Text style={styles.contactText}>123 Rue de Paris, 75000</Text>
          </View>
        </View>

        {/* Bouton Prendre RDV */}
        <TouchableOpacity 
          style={styles.bookButton}
          onPress={() => router.push({
            pathname: '/BookScreen',
            params: { doctor: JSON.stringify(doctor) }
          })}
        >
          <Text style={styles.bookButtonText}>Prendre rendez-vous</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#007AFF',
  },
  content: {
    padding: 16,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  specialty: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
    marginRight: 16,
    color: '#FFD700',
  },
  consultationsText: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#007AFF',
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactText: {
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
  },
  bookButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  bookButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DoctorDetails;