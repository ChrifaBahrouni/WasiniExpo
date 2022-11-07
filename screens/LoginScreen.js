import React from 'react';
import { View , StyleSheet , Image  } from 'react-native';
const INSTAGRAM_LOGO ='https://www.ecoledemusique.islesurlasorgue.fr/wp-content/uploads/2020/06/instagram-logo.jpg'
import LoginForm from '../components/Login/LoginForm';
function LoginScreen({navigation}) {
  return <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image  source={ {uri: INSTAGRAM_LOGO , width : 100 , height: 100}} />
    </View>
    <LoginForm  navigation={navigation} />

  </View>;
}

export default LoginScreen;
 const styles = StyleSheet.create({
   container : { 
     flex:1 , 
     backgroundColor:'white' , 
     paddingTop :50 , 
     paddingHorizontal:12
   } , 
   logoContainer  : {
     alignItems:'center' , 
     marginTop : 60 
   }
 })