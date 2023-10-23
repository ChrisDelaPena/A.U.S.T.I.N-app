import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppStyles from '../constants/AppStyles';

const ButtonAnimatedGradient = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: AppStyles.color.slate800,
    background: 'linear-gradient(to right, #c7d2fe, #8678f9)',
    paddingHorizontal: 12,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ButtonAnimatedGradient;