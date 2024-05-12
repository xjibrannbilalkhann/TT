// screens/BotScreen.js
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import CommonStyling from '../components/CommonStyling';

const BotScreen = () => {
  return (
    <CommonStyling>
    {/* <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}> */}
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#007BFF', fontSize: 24, fontWeight: 'bold' }}>
          AI ChatBot         
          </Text>
      {/* Add your AudioScreen content here */}
    </View>
  {/* </SafeAreaView> */}
</CommonStyling>
  );
};

export default BotScreen;
