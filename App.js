import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
      <TouchableOpacity style={styles.button} onPress={generateRandomNumber}>
        <Text style={styles.buttonText}>Sortear</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#A020F0', // Cor de fundo do botão
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 18,
    textAlign: 'center',
  },
});
