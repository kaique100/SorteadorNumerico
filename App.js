import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 11); // Gera um número entre 0 e 10
    setRandomNumber(number);
  };

  return (
    <View style={styles.container}>
      <Text>Escolha um número entre 0 e 10</Text>
      <Text style={styles.randomNumberText}>
        {randomNumber !== null ? `Número sorteado: ${randomNumber}` : 'Nenhum número sorteado'}
      </Text>
      <Button title="Sortear" onPress={generateRandomNumber} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  randomNumberText: {
    fontSize: 18,
    marginBottom: 20,
    width: 160,
    textAlign: 'center',
  },
});
