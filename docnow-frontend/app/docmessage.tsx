// app/chat/index.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const MessagesScreen = () => {
  const router = useRouter();

  // Mock data for doctors
  const doctors = [
    {
      id: 1,
      name: 'Dr. Olivia Turner, M.D.',
      specialty: 'Dermato-Endocrinology',
      profilePicture: require('@/assets/images/profile.jpg'),
    },
    {
      id: 2,
      name: 'Dr. Alexander Bennett, Ph.D.',
      specialty: 'Dermo-Genetics',
      profilePicture: require('@/assets/images/profile.jpg'),
    },
    {
      id: 3,
      name: 'Dr. Sophia Martinez, Ph.D.',
      specialty: 'Cosmetic Bioengineering',
      profilePicture: require('@/assets/images/profile.jpg'),
    },
    {
      id: 4,
      name: 'Dr. Michael Davidson, M.D.',
      specialty: 'Solar Dermatology',
      profilePicture: require('@/assets/images/profile.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => router.replace('/home')}>
  <Ionicons name="arrow-back" size={24} color="#007AFF" />
</TouchableOpacity>
        <Text style={styles.title}>Messages</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <View style={styles.searchInput}>
            
          <Ionicons name="search" size={20} color="#888" />
          <TextInput
            placeholder="Search"
            style={styles.searchText} />
        </View>
        <TouchableOpacity>
          <Ionicons name="filter" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Doctors List */}
      <ScrollView contentContainerStyle={styles.doctorsList}>
        {doctors.map((doctor) => (
         <TouchableOpacity
         style={styles.doctorCard}
         onPress={() => router.push(`/chat/${doctor.id}`)} // ✅ Bon format
       >
            <Image source={doctor.profilePicture} style={styles.doctorProfilePicture} />
            <View style={styles.doctorInfo}>
              <Text style={styles.doctorName}>{doctor.name}</Text>
              <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="heart" size={20} color="#FF6347" />
            </TouchableOpacity>
          </TouchableOpacity>
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
         </View>
         
  );
};

export default MessagesScreen;

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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#007AFF',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  doctorsList: {
    gap: 16,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  doctorProfilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
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