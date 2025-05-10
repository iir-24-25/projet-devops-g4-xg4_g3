import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

// Liste des jours pré-définis
const days = [
  { id: '1', day: 'Mon', date: '9' },
  { id: '2', day: 'Tue', date: '10' },
  { id: '3', day: 'Wed', date: '11' },
  { id: '4', day: 'Thu', date: '12' },
  { id: '5', day: 'Fri', date: '13' },
  { id: '6', day: 'Sat', date: '14' },
];

// Horaires disponibles
const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

export default function BookScreen() {
  const { doctor } = useLocalSearchParams();
  const router = useRouter();

  const [selectedDay, setSelectedDay] = useState('3'); // Jour par défaut sélectionné
  const [patientType, setPatientType] = useState('Youself');
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Female');
  const [consultationMode, setConsultationMode] = useState('En ligne');
  const [problemDescription, setProblemDescription] = useState('');

  return (
    <View style={styles.container}>
      {/* Scroll Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* En-tête */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#007AFF" />
          </TouchableOpacity>
          <Text style={styles.doctorName}>
            {doctor ? JSON.parse(doctor).name : 'Chargement...'}
          </Text>
          <View style={{ width: 24 }} /> {/* Espaceur pour aligner le bouton retour */}
        </View>

        {/* Sélection du jour */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date</Text>
          <FlatList
            data={days}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.dayButton,
                  selectedDay === item.id && styles.selectedDay,
                ]}
                onPress={() => setSelectedDay(item.id)}
              >
                <Text
                  style={[
                    styles.dayText,
                    selectedDay === item.id && styles.selectedDayText,
                  ]}
                >
                  {item.day}
                </Text>
                <Text
                  style={[
                    styles.dateText,
                    selectedDay === item.id && styles.selectedDateText,
                  ]}
                >
                  {item.date}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Sélection de l’heure */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Time</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.timeSlotContainer}>
              {timeSlots.map((slot, index) => (
                <TouchableOpacity key={index} style={styles.timeSlot}>
                  <Text>{slot}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Mode de consultation */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mode de Consultation</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={[
                styles.radioButton,
                consultationMode === 'En ligne' && styles.selectedRadio,
              ]}
              onPress={() => setConsultationMode('En ligne')}
            >
              <Text>🪫 En ligne</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioButton,
                consultationMode === 'Présentiel' && styles.selectedRadio,
              ]}
              onPress={() => setConsultationMode('Présentiel')}
            >
              <Text>🏠 Présentiel</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Informations du patient */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Patient Details</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={[
                styles.radioButton,
                patientType === 'Youself' && styles.selectedRadio,
              ]}
              onPress={() => setPatientType('Youself')}
            >
              <Text>Youself</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioButton,
                patientType === 'Another Person' && styles.selectedRadio,
              ]}
              onPress={() => setPatientType('Another Person')}
            >
              <Text>Another Person</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Full Name"
            value={patientName}
            onChangeText={setPatientName}
            style={styles.input}
          />
          <TextInput
            placeholder="Age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            style={styles.input}
          />
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'Male' && styles.selectedGender,
              ]}
              onPress={() => setGender('Male')}
            >
              <Text>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'Female' && styles.selectedGender,
              ]}
              onPress={() => setGender('Female')}
            >
              <Text>Female</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Describe your problem here..."
            value={problemDescription}
            onChangeText={setProblemDescription}
            multiline
            numberOfLines={4}
            style={[styles.input, styles.textArea]}
          />
        </View>

        {/* Mode de paiement */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={[
                styles.radioButton,
                consultationMode === 'Cash' && styles.selectedRadio,
              ]}
              onPress={() => setConsultationMode('Cash')}
            >
              <Text>Cash</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioButton,
                consultationMode === 'Carte' && styles.selectedRadio,
              ]}
              onPress={() => setConsultationMode('Carte')}
            >
              <Text>Carte</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioButton,
                consultationMode === 'Paypal' && styles.selectedRadio,
              ]}
              onPress={() => setConsultationMode('Paypal')}
            >
              <Text>Paypal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.radioButton,
                consultationMode === 'Others' && styles.selectedRadio,
              ]}
              onPress={() => setConsultationMode('Others')}
            >
              <Text>Others</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bouton de confirmation */}
        <TouchableOpacity 
  style={styles.paymentButton}
  onPress={() => router.push({
    pathname: '/ConfirmationScreen',
    params: {
      doctor: JSON.stringify(doctor),
      selectedDay,
      selectedTime: '10:00 AM', // À modifier si nécessaire
      patientName,
      age,
      gender,
      consultationMode,
      problemDescription,
    }
  })}
>
  <Text style={styles.paymentButtonText}>Suivant</Text>
</TouchableOpacity>
</ScrollView>
      {/* Barre de navigation inférieure */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.replace('/home')}
        >
          <Ionicons name="home" size={24} color="#007AFF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.replace('/MessagesScreen')}
        >
          <Ionicons name="chatbox-ellipses" size={24} color="#007AFF" />
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.replace('/ProfileScreen')}
        >
          <Ionicons name="person" size={24} color="#007AFF" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.replace('/home')}
        >
          <Ionicons name="calendar" size={24} color="#007AFF" />
          <Text style={styles.navText}>Calendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100, // Pour ne pas que le footer cache le dernier élément
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dayButton: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    alignItems: 'center',
  },
  selectedDay: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  dayText: {
    fontSize: 14,
    color: '#333',
  },
  selectedDayText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  selectedDateText: {
    color: '#fff',
  },
  timeSlotContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  timeSlot: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  radioGroup: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  radioButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedRadio: {
    borderColor: '#007AFF',
    backgroundColor: '#E0F0FF',
  },
  genderButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedGender: {
    borderColor: '#007AFF',
    backgroundColor: '#E0F0FF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  paymentButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 24,
  },
  paymentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingVertical: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  navText: {
    fontSize: 12,
    color: '#007AFF',
    marginTop: 4,
  },
});