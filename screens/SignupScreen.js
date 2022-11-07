import React from 'react';
import { View, StyleSheet , Image  } from 'react-native';
const INSTAGRAM_LOGO ='https://www.ecoledemusique.islesurlasorgue.fr/wp-content/uploads/2020/06/instagram-logo.jpg'

import SignupForm from '../components/Signup/SignupForm';
//import { useState } from 'react/cjs/react.development';
function SignupScreen({navigation}) {
  
  return <View style={styles.container}>
    <View style={styles.logoContainer} >
      <Image source={{ uri: INSTAGRAM_LOGO, width: 100, height: 100 }} />
    </View>
    <SignupForm  navigation={navigation} />
  </View>;
}

export default SignupScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingHorizontal: 12
  },
  logoContainer: {
    alignItems:'center' , 
    marginTop : 40 
  }
})
