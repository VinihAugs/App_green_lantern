import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import symbolOn from './assets/pictures/symbolon.png';
import symbolOff from './assets/pictures/symboloff.png';

export default function App() {
  const [isActive, setIsActive] = useState(false);

  const textLight = 'No dia mais claro, na noite mais escura, nenhum mal escapará da minha vista.';
  const textShadow = 'Que aqueles que adoram o mal tremam diante do poder do Lanterna Verde!';

  function handleSymbol() {
    setIsActive(currentValue => !currentValue);
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      
      <StatusBar
        backgroundColor={isActive ? '#057c05' : '#000000'} 
        barStyle={isActive ? 'light-content' : 'dark-content'} 
      />

      <TouchableOpacity onPress={handleSymbol} style={styles.button}>
        
        <Image 
          style={styles.logo}
          source={isActive ? symbolOn : symbolOff}
        />
        
        <Text style={isActive ? styles.textOn : styles.textOff}>
          {isActive ? textShadow : textLight}
        </Text>

      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, 
  },
  containerOff:{
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    alignItems: 'center', 
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  textOn: {
    color: '#057c05', 
    textAlign: 'center',
    fontSize: 20,
  },
  textOff: {
    color: 'black', 
    textAlign: 'center',
    fontSize: 20,
  }
});
