import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function PremierEcran() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Logo centré sous forme d'image */}
      <View style={styles.logoContainer}>
        <Image
        source={require('@/assets/images/logo2.png')} 
        style={styles.logoImage}
          resizeMode="contain"
        />
            <Text style={styles.appName}>DocNow</Text>
            </View>

      

      {/* Contenu bas */}
      <View style={styles.bottomContainer}>
        {/* Description */}
        <Text style={styles.description}>
          Join our secure medical community and book appointments with healthcare professionals in just a few clicks, or log in to access your personal space and manage your current consultations.
        </Text>

        {/* Boutons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.loginButton]}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.signupButton]}
            onPress={() => router.push('/signup')}
          >
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200, // Ajustez selon votre logo
    height: 100, // Ajustez selon votre logo
  },
  bottomContainer: {
    marginBottom: 40,
  },
  tagline: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0)',
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#2260FF',
  },
  signupButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#2260FF',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  signupButtonText: {
    color: '#2260FF',
    fontSize: 16,
    fontWeight: '600',
  },
});