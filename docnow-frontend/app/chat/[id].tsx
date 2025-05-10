import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';

// Bibliothèque audio Expo
import * as Audio from 'expo-av';

export default function ChatDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [messages, setMessages] = useState([
    { key: '1', text: 'Bonjour, comment puis-je vous aider ?', sender: 'doctor' },
    { key: '2', text: 'J’ai quelques questions concernant mon rendez-vous.', sender: 'user' },
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);

  // 💬 Envoi texte
  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        key: Date.now().toString(),
        text: inputText,
        sender: 'user',
      };
      setMessages([newMessage, ...messages]);
      setInputText('');
    }
  };

  // 🎙️ Début enregistrement
  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync(); // Demande permission micro
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );

      setRecording(recording);
      setIsRecording(true);
    } catch (err) {
      console.error('Erreur démarrage enregistrement :', err);
      Alert.alert('Erreur', "Impossible de démarrer l'enregistrement.");
    }
  };

  // ⏹️ Arrêter et envoyer le son
  const stopRecording = async () => {
    try {
      await recording.stopAndUnloadAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });

      const uri = recording.getURI();

      // Simuler l'envoi d'un message audio
      const audioMessage = {
        key: Date.now().toString(),
        text: '[AUDIO ENREGISTRÉ]', // À remplacer par URI ou upload plus tard
        sender: 'user',
      };

      setMessages([audioMessage, ...messages]);

      // Nettoyage
      setRecording(null);
      setIsRecording(false);
    } catch (err) {
      console.error('Erreur arrêt enregistrement :', err);
      Alert.alert('Erreur', "Une erreur est survenue lors de l'arrêt de l'enregistrement.");
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.doctorMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* En-tête */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.title}>Dr. Olivia Turner</Text>
        <TouchableOpacity>
          <Ionicons name="call" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Zone de discussion */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.messagesList}
        inverted
      />

      {/* Barre d'envoi */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="attach" size={24} color="#007AFF" />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={sendMessage}
        />

        <TouchableOpacity
          style={styles.iconButton}
          onPress={isRecording ? stopRecording : startRecording}
        >
          <Ionicons name={isRecording ? 'stop' : 'mic'} size={24} color="#007AFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginRight: 30,
    color: '#333',
  },
  messagesList: {
    paddingHorizontal: 16,
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 80,
  },
  messageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0E0E0',
    padding: 12,
    borderRadius: 12,
    marginVertical: 4,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  doctorMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  messageText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  iconButton: {
    marginHorizontal: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  sendButton: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 20,
    marginLeft: 8,
  },
});