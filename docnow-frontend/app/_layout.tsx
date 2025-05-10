import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="splash" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen 
  name="premier" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="signup" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="login" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="home" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="ForgotPasswordScreen" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>

<Stack.Screen 
  name="VerifyCodeScreen" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="ProfileScreen" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>

<Stack.Screen 
  name="MessagesScreen" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>

<Stack.Screen 
  name="BookScreen" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>

<Stack.Screen 
  name="ConfirmationScreen" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="ConfirmationSuccessScreen" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>

<Stack.Screen 
  name="chat/[id]" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="InformationUserScreen" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="calendar" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="Changepass" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="favorites" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>

<Stack.Screen 
  name="details-doctor.tsx" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="docmessage" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="doctorcalandar" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="DoctorHomeScreen" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>
<Stack.Screen 
  name="notifications" 
  options={{ 
    headerShown: false // Ceci cache complètement la barre de navigation
  }} 
/>




      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}