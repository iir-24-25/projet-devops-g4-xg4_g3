import { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Redirection après 5 secondes vers l'écran Home
    const timer = setTimeout(() => {
      router.replace('/premier'); // 'replace' empêche le retour à l'écran Splash
    }, 5000);

    // Nettoyage du timer si le composant est démonté
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Logo - Remplacez require() par votre chemin d'image */}
      <Image 
        source={require('@/assets/images/logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Nom de l'app */}
      <Text style={styles.appName}>DocNow</Text>

      {/* Phrase d'accroche */}
      <Text style={styles.tagline}>Votre partenaire santé intelligent</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2260FF' 
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
     // Optionnel pour un logo blanc
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 8,
  },
});