import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';



export default function ConfirmationSuccessScreen() {
    const router = useRouter();
    useEffect(() => {
        // Redirection après 5 secondes vers l'écran Home
        const timer = setTimeout(() => {
          router.replace('/home'); // 'replace' empêche le retour à l'écran Splash
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>✅</Text>
      </View>
      <Text style={styles.title}>Confirmation avec succe </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007AFF', // Couleur bleue
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 48,
    color: '#fff',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});