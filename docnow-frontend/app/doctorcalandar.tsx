import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';


export default function DoctorCalendarScreen() {
          const router = useRouter();
    
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  
  // Générer les jours du mois actuel
  const generateMonthDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    // Ajuster pour que Lundi soit le premier jour (0 = Dimanche -> 1 = Lundi)
    const firstDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    
    const days = [];
    
    // Ajouter des cases vides pour les jours avant le 1er du mois
    for (let i = 0; i < firstDayIndex; i++) {
      days.push({ day: '', disabled: true });
    }
    
    // Ajouter les jours du mois
    for (let d = 1; d <= daysInMonth; d++) {
      days.push({ day: d, disabled: false });
    }
    
    return days;
  };

  const monthDays = generateMonthDays();
  const monthName = currentMonth.toLocaleString('default', { month: 'long' });
  const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  // Données simulées de rendez-vous
  const appointments = [
    { id: '1', client: 'Client 1', problem: 'azmatique', date: 10 },
    { id: '2', client: 'Client 2', problem: 'grip', date: 15 },
    { id: '3', client: 'Client 3', problem: 'les epoles ', date: 20 },
    { id: '4', client: 'Client 4', problem: 'malade ', date: selectedDate },
  ];

  const filteredAppointments = appointments.filter(app => app.date === selectedDate);

  const renderDayItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.dayItem,
        item.day === selectedDate && styles.selectedDayItem,
        item.disabled && styles.disabledDay,
      ]}
      onPress={() => !item.disabled && setSelectedDate(item.day)}
      disabled={item.disabled}
    >
      <Text style={[
        styles.dayText,
        item.day === selectedDate && styles.selectedDayText,
      ]}>
        {item.day || ''}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      
      {/* Liste des rendez-vous */}
      <FlatList
        data={filteredAppointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.appointmentItem}>
            <Text style={styles.clientName}>{item.client}</Text>
            <Text style={styles.problemText}>{item.problem}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noAppointmentsText}>Aucun rendez-vous ce jour</Text>
        }
        style={styles.appointmentsList}
      />

      <View style={styles.separator} />

      {/* Calendrier mensuel */}
      <Text style={styles.monthTitle}>{monthName.toUpperCase()}</Text>
      
      {/* Jours de la semaine */}
      <View style={styles.weekDaysContainer}>
        {weekDays.map((day) => (
          <View key={day} style={styles.weekDay}>
            <Text style={styles.weekDayText}>{day}</Text>
          </View>
        ))}
      </View>

      {/* Grille des jours */}
      <View style={styles.daysGrid}>
        {monthDays.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayItem,
              item.day === selectedDate && styles.selectedDayItem,
              item.disabled && styles.disabledDay,
            ]}
            onPress={() => !item.disabled && setSelectedDate(item.day)}
            disabled={item.disabled}
          >
            <Text style={[
              styles.dayText,
              item.day === selectedDate && styles.selectedDayText,
            ]}>
              {item.day || ''}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
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
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  appointmentsList: {
    flex: 1,
    marginBottom: 20,
  },
  appointmentItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  clientName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  problemText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  noAppointmentsText: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  weekDay: {
    flex: 1,
    alignItems: 'center',
  },
  weekDayText: {
    fontWeight: 'bold',
    color: '#666',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayItem: {
    width: '14.28%', // 100% / 7 jours
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  selectedDayItem: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  disabledDay: {
    backgroundColor: '#f9f9f9',
  },
  dayText: {
    fontSize: 16,
    color: '#333',
  },
  selectedDayText: {
    color: '#fff',
    fontWeight: 'bold',
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