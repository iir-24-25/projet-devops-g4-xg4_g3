import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  // Mock data for doctors and appointments
  const doctors = [
    {
      id: 1,
      name: 'Dr. Olivia Turner, M.D.',
      specialty: 'Dermato-Endocrinology',
      rating: 5,
      consultations: 60,
      profilePicture: require('@/assets/images/profile.jpg'),
    },
    {
      id: 2,
      name: 'Dr. Alexander Bennett, Ph.D.',
      specialty: 'Dermo-Genetics',
      rating: 4.5,
      consultations: 40,
      profilePicture: require('@/assets/images/profile.jpg'),
    },
    {
      id: 3,
      name: 'Dr. Sophia Martinez, Ph.D.',
      specialty: 'Cosmetic Bioengineering',
      rating: 5,
      consultations: 150,
      profilePicture: require('@/assets/images/profile.jpg'),
    },
    {
      id: 4,
      name: 'Dr. Michael Davidson, M.D.',
      specialty: 'Nano-Dermatology',
      rating: 4.8,
      consultations: 90,
      profilePicture: require('@/assets/images/profile.jpg'),
    },
  ];

  const appointments = [
    {
      id: 1,
      time: '10 AM',
      doctor: 'Dr. Olivia Turner, M.D.',
      description: 'Treatment and prevention of skin and photodermatitis.',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Scroll Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userProfile}>
            <Image source={require('@/assets/images/profile.jpg')} style={styles.profilePicture} />
            <View>
              <Text style={styles.welcomeText}>Hi, Welcome Back</Text>
              <Text style={styles.userName}>John Doe</Text>
            </View>
          </View>
          <View style={styles.iconsContainer}>
          <TouchableOpacity 
  style={styles.iconButton}
  onPress={() => router.push('/favorites')}
>
  <Ionicons name="heart" size={24} color="#FF6347" />
  <Text style={styles.iconLabel}>Favorite</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={styles.iconButton}
  onPress={() => router.push('/chatbot')}
>
  <Ionicons name="help-circle-outline" size={24} color="#007AFF" />
  <Text style={styles.iconLabel}>Help</Text>
</TouchableOpacity>
            <TouchableOpacity 
  style={styles.iconButton}
  onPress={() => router.push('/notifications')}
>
  <Ionicons name="notifications" size={24} color="#007AFF" />
</TouchableOpacity>
            <TouchableOpacity 
  style={styles.iconButton}
  onPress={() => router.push('/settings')}
>
  <Ionicons name="settings" size={24} color="#007AFF" />
</TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <View style={styles.searchInput}>
            <Ionicons name="search" size={20} color="#888" />
            <TextInput 
              placeholder="Search" 
              style={styles.searchText} 
              placeholderTextColor="#888"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={24} color="#007AFF" />
          </TouchableOpacity>
        </View>

        {/* Calendar */}
        <View style={styles.calendar}>
          <View style={styles.calendarDays}>
            {['9 MON', '10 TUE', '11 WED', '12 THU', '13 FRI', '14 SAT'].map((day, index) => {
              const [number, name] = day.split(' ');
              const isSelected = index === 2; // Wednesday is selected
              return (
                <TouchableOpacity 
                  key={day}
                  style={[
                    styles.day, 
                    isSelected ? styles.selectedDay : styles.unselectedDay
                  ]}
                >
                  <Text style={[
                    styles.dayNumber,
                    isSelected && styles.selectedText
                  ]}>{number}</Text>
                  <Text style={[
                    styles.dayName,
                    isSelected && styles.selectedText
                  ]}>{name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.dateText}>11 Wednesday - Today</Text>
        </View>

        {/* Appointments */}
        <View style={styles.appointments}>
          {appointments.map((appointment) => (
            <View key={appointment.id} style={styles.appointmentCard}>
              <Text style={styles.appointmentTime}>{appointment.time}</Text>
              <View style={styles.appointmentDetails}>
                <Text style={styles.appointmentDoctor}>{appointment.doctor}</Text>
                <Text style={styles.appointmentDescription}>{appointment.description}</Text>
              </View>
              <View style={styles.actionButtons}>
                <TouchableOpacity>
                  <Ionicons name="checkmark-circle" size={24} color="#007AFF" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="close-circle" size={24} color="#FF6347" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Doctors List */}
        <View style={styles.doctorsList}>
  {doctors.map((doctor) => (
    <TouchableOpacity 
      key={doctor.id}
      onPress={() => router.push({
        pathname: '/details-doctor',
        params: { doctor: JSON.stringify(doctor) }
      })}
      style={styles.doctorCard}
    >
      <Image source={doctor.profilePicture} style={styles.doctorProfilePicture} />
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{doctor.rating}</Text>
          <Text style={styles.consultationsText}>{doctor.consultations} Consultations</Text>
        </View>
      </View>
      <View style={styles.actionIcons}>
        <TouchableOpacity 
          onPress={(e) => {
            e.stopPropagation(); // Empêche la navigation vers details
            router.push({
              pathname: '/BookScreen',
              params: { doctor: JSON.stringify(doctor) }
            });
          }}
          style={styles.iconButton}
        >
          <Ionicons name="add" size={24} color="#007AFF" />
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={(e) => {
            e.stopPropagation();
            alert('Ajouté aux favoris!');
          }}
          style={styles.iconButton}
        >
          <Ionicons name="heart" size={24} color="#FF6347" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  ))}
</View>
      </ScrollView>

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  userProfile: {
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    alignItems: 'center',
    padding: 4,
  },
  iconLabel: {
    fontSize: 12,
    color: '#333333',
    marginTop: 4,
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
    marginRight: 12,
  },
  searchText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    padding: 8,
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
  unselectedDay: {
    backgroundColor: '#F0F0F0',
  },
  selectedDay: {
    backgroundColor: '#007AFF',
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dayName: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#666',
  },
  selectedText: {
    color: '#FFF',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  appointments: {
    marginBottom: 24,
  },
  appointmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 8,
  },
  appointmentTime: {
    width: 50,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  appointmentDetails: {
    flex: 1,
    marginLeft: 16,
  },
  appointmentDoctor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  appointmentDescription: {
    fontSize: 14,
    color: '#666666',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  doctorsList: {
    marginBottom: 24,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
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
    color: '#333333',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666666',
    marginVertical: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFD700',
    marginRight: 8,
  },
  consultationsText: {
    fontSize: 14,
    color: '#666666',
  },
  actionIcons: {
    flexDirection: 'row',
    gap: 8,
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

export default HomeScreen;