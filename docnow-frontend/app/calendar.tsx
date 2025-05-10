// app/calendar.tsx
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CalendarScreen() {
  const router = useRouter();

  // Liste de rendez-vous fictifs
  const rdvs = [
    {
      id: '1',
      doctor: 'Dr. Olivia Turner',
      specialty: 'Cardiologue',
      date: '2025-04-10', // Format YYYY-MM-DD
    },
    {
      id: '2',
      doctor: 'Dr. Jean Dupont',
      specialty: 'Dermatologue',
      date: '2025-04-25',
    },
    {
      id: '3',
      doctor: 'Dr. Sophie Martin',
      specialty: 'Généraliste',
      date: '2025-05-05',
    },
  ];

  // Calcul du nombre de jours restants
  const getDaysRemaining = (dateString: string): number => {
    const today = new Date();
    const date = new Date(dateString);
    const diffTime = date.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Composant d’un rendez-vous
  const RdvItem = ({ item }) => {
    const daysLeft = getDaysRemaining(item.date);
    const isSoon = daysLeft <= 3;

    return (
      <View style={styles.rdvCard}>
        <Ionicons name="medkit" size={40} color="#007AFF" />
        <View style={styles.rdvInfo}>
          <Text style={styles.doctorName}>{item.doctor}</Text>
          <Text style={styles.specialty}>{item.specialty}</Text>
          <Text style={styles.date}>
            Rendez-vous le : {new Date(item.date).toLocaleDateString('fr-FR')}
          </Text>
          <Text
            style={[
              styles.daysLeft,
              { color: isSoon ? '#FF3B30' : '#007AFF' },
            ]}
          >
            {daysLeft >= 0 ? `${daysLeft} jour(s) restant(s)` : 'Passé'}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Mes Rendez-vous</Text>
      </View>

      {/* Liste des rendez-vous */}
      <FlatList
        data={rdvs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RdvItem item={item} />}
        contentContainerStyle={styles.list}
      />

       {/* Bottom Navigation */}
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
              onPress={() => router.replace('/calendar')}
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
  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  rdvCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  rdvInfo: {
    marginLeft: 12,
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  specialty: {
    fontSize: 14,
    color: '#666',
  },
  date: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  daysLeft: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
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