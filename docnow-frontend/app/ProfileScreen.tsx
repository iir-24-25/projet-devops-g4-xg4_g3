import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const ProfileScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => router.replace('/home')}>
  <Ionicons name="arrow-back" size={24} color="#007AFF" />
</TouchableOpacity>
        <Text style={styles.title}>My Profile</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image
          source={require('@/assets/images/profile.jpg')} // Remplace par ton image
          style={styles.profilePicture}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      {/* Options */}
      <View style={styles.options}>
      <TouchableOpacity
  style={styles.optionItem}
  onPress={() => router.push('/InformationUserScreen')}>
  <Ionicons name="person" size={20} color="#007AFF" />
  <Text style={styles.optionText}>Profile</Text>
  <Ionicons name="chevron-forward" size={20} color="#007AFF" />
</TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}
          onPress={() => router.push('/favorites')}
>
          <Ionicons name="heart" size={20} color="#007AFF" />
          <Text style={styles.optionText}>Favorite</Text>
          <Ionicons name="chevron-forward" size={20} color="#007AFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}
                  onPress={() => router.push('/settings')}
>
          <Ionicons name="settings" size={20} color="#007AFF" />
          <Text style={styles.optionText}>Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="#007AFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}
                          onPress={() => router.push('/login')}
>
          <Ionicons name="log-out" size={20} color="#007AFF" />
          <Text style={styles.optionText}>Logout</Text>
          <Ionicons name="chevron-forward" size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>

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

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#007AFF',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  options: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#007AFF',
    marginTop: 4,
  },
});