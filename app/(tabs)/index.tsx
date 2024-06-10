import { View, Image, StyleSheet, Button, Text } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [dogImage, setDogImage] = useState(null);

  const fetchDogImage = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogImage(response.data.message);
    } catch (error) {
      console.error('Erro ao obter a imagem do cachorro:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dog Image Viewer</Text>
      {dogImage && <Image source={{ uri: dogImage }} style={styles.image} />}
      <Button title="Carregar Nova Imagem" onPress={fetchDogImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});