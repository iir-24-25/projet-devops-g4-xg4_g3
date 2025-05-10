import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FavoritesScreen() {
  const favorites = [
    {
      id: '1',
      doctor: 'Dr. Olivia Turner, M.D.',
      specialty: 'Dermato-Endocrinology',
    },
    {
      id: '2',
      doctor: 'Dr. Sophia Martinez, Ph.D.',
      specialty: 'Cosmetic Bioengineering',
    },
    {
      id: '3',
      doctor: 'Dr. Michael Davidson, M.D.',
      specialty: 'Nano-Dermatology',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.favoriteItem}>
      <Ionicons name="heart" size={24} color="#FF6347" />
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{item.doctor}</Text>
        <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favoris</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  doctorInfo: {
    marginLeft: 12,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
  },
});