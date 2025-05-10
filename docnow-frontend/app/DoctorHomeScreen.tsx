import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function DoctorHomeScreen() {
  const router = useRouter();

  const [selectedDay, setSelectedDay] = useState('WED'); // Jour sélectionné par défaut

  // Données simulées avec photo et statut de confirmation
  const doctorName = 'Dr. Olivia Turner';
  const appointments = [
    { 
      id: '1', 
      time: '10 AM', 
      client: 'Client 1', 
      problem: 'Problème 1',
      profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
      confirmed: true 
    },
    { 
      id: '2', 
      time: '11 AM', 
      client: 'Client 2', 
      problem: 'Problème 2',
      profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
      confirmed: false 
    },
    { 
      id: '3', 
      time: '12 PM', 
      client: 'Client 3', 
      problem: 'Problème 3',
      profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
      confirmed: true 
    },
  ];

  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/40' }} 
          style={styles.profilePicture} 
        />
        <View style={styles.headerTextContainer}>
                        <Image source={require('@/assets/images/profile.jpg')} style={styles.profilePicture} />
            
          <Text style={styles.welcomeText}>Hi, Welcome Back</Text>
          <Text style={styles.doctorName}>{doctorName}</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}
                  onPress={() => router.replace('/favorites')}
          >
            <Ionicons name="heart" size={24} color="#FF6347" />
            <Text style={styles.iconLabel}>Favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}
                            onPress={() => router.replace('/notifications')}
          >
            <Ionicons name="notifications" size={24} color="#007AFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Calendrier */}
      <View style={styles.calendar}>
        <View style={styles.calendarDays}>
          {daysOfWeek.map((day) => (
            <TouchableOpacity
              key={day}
              style={[
                styles.day,
                selectedDay === day && styles.selectedDay,
              ]}
              onPress={() => setSelectedDay(day)}
            >
              <Text style={[
                styles.dayText, 
                selectedDay === day && styles.selectedDayText
              ]}>
                {day}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.dateText}>11 Wednesday - Today</Text>
      </View>

      {/* Liste des rendez-vous */}
      <ScrollView 
        contentContainerStyle={styles.appointments}
        showsVerticalScrollIndicator={false}
      >
        {appointments.map((appointment) => (
          <View key={appointment.id} style={styles.appointmentCard}>
            <View style={styles.appointmentTime}>
              <Text style={styles.timeText}>{appointment.time}</Text>
            </View>
            <Image
              source={{ uri: appointment.profilePic }}
              style={styles.clientProfilePicture}
            />
            <View style={styles.clientInfo}>
              <Text style={styles.clientName}>{appointment.client}</Text>
              <Text style={styles.clientProblem}>{appointment.problem}</Text>
              <Text style={[
                styles.confirmationStatus,
                appointment.confirmed ? styles.confirmed : styles.notConfirmed
              ]}>
                {appointment.confirmed ? 'Confirmé' : 'Non confirmé'}
              </Text>
            </View>
            <View style={styles.actionIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="close-circle" size={24} color="#FF6347" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

       {/* Barre de navigation */}
       <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}
                  onPress={() => router.replace('/DoctorHomeScreen')}
>
          <Ionicons name="home" size={24} color="#fff" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}
                          onPress={() => router.replace('/docmessage')}
>
          <Ionicons name="chatbox-ellipses" size={24} color="#fff" />
          <Text style={styles.navText}>Chat</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.navItem}
                          onPress={() => router.replace('/doctorcalandar')}
>
          <Ionicons name="calendar" size={24} color="#fff" />
          <Text style={styles.navText}>Calendar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  headerTextContainer: {
    flex: 1,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
 
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  welcomeText: {
    fontSize: 14,
    color: '#666',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  iconButton: {
    alignItems: 'center',
    padding: 8,
  },
  iconLabel: {
    fontSize: 10,
    color: '#333',
    marginTop: 2,
  },
  calendar: {
    marginBottom: 24,
  },
  calendarDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  day: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  selectedDay: {
    backgroundColor: '#007AFF',
  },
  dayText: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: '#666',
  },
  selectedDayText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  appointments: {
    paddingBottom: 20,
  },
  appointmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  appointmentTime: {
    width: 60,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  clientProfilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  clientInfo: {
    flex: 1,
  },
  clientName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  clientProblem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  confirmationStatus: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  confirmed: {
    color: '#4CAF50',
  },
  notConfirmed: {
    color: '#FF6347',
  },
  actionIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#007AFF',
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
    color: '#fff',
    marginTop: 4,
  },
});