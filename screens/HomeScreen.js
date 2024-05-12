// screens/HomeScreen.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StressMeter from '../components/StressMeter';
import CommonStyling from '../components/CommonStyling';

const HomeScreen = () => {

  const stressLevel = 50;

  return (
    <View style={styles.container}>
      <CommonStyling>
        <View style={styles.topContainer}>
        <Text style={{ color: '#007BFF', fontSize: 24, fontWeight: 'bold' }}>
              Home    
            </Text>
          <StressMeter stressLevel={stressLevel} /> 
        </View>
       
      </CommonStyling>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
