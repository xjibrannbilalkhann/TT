// components/StressMeter.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

const StressMeter = ({ stressLevel }) => {
  const [meterValue, setMeterValue] = useState(0);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setMeterValue((prevValue) => (prevValue + 5) % 101);
    }, 500);

    return () => clearInterval(animationInterval);
  }, []);

  const outerRadius = 85; // Larger radius for the grey outline
  const innerRadius = 80; // Smaller radius for the gradient fill

  const startColor = '#007BFF'; // Blue color for full stress
  const endColor = '#FFFFFF'; // White color for no stress

  const gradientColors = [
    { offset: '0%', color: startColor },
    { offset: `${Math.min(stressLevel, meterValue)}%`, color: startColor },
    { offset: `${Math.min(stressLevel, meterValue)}%`, color: endColor },
    { offset: '100%', color: endColor },
  ];

  return (
    <View style={styles.container}>
      <Svg height="200" width="200">
        {/* Grey outline circle */}
        <Circle cx="100" cy="100" r={outerRadius} fill="transparent" stroke="#CCCCCC" strokeWidth="5" />

        {/* Gradient fill circle */}
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            {gradientColors.map(({ offset, color }, index) => (
              <Stop key={index} offset={offset} stopColor={color} />
            ))}
          </LinearGradient>
        </Defs>
        <Circle cx="100" cy="100" r={innerRadius} fill="url(#gradient)" />
      </Svg>
      <Text style={styles.stressLevelText}>{`Stress Level: ${stressLevel}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  stressLevelText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default StressMeter;
