
import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import EmojiList from './EmojiList'; 

export default function App() {
  

    Alert.alert('Sucesso!', 'Você selecionou um emoji com sucesso!');
    

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.title}>Escolha um Emoji</Text>
      </View>
      
      <View style={styles.bottomContainer}>
        <EmojiList onSelect={handleSelectEmoji} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  mainContent: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 1, 
    justifyContent: 'center',
    backgroundColor: '#333',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 10,
  },
});