import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function PremierEcran() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 24 }}>Hello World</Text>
    </View>
  );
}