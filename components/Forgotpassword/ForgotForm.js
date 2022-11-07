import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Button, TextInput, StyleSheet, Image, Pressable } from 'react-native';
const API_URL = 'http://10.0.2.2:5000';//const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

import { auth } from '../../firebase'
function ForgotForm() {
  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const onSubmitHandler = () => {
    /*  const payload = {
          email
          
      };
      fetch(`${API_URL}/${'forgotpassword'}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        
        body: JSON.stringify(payload),
      })
          .then(async res => {
              try {
                  const jsonRes = await res.json();
                  if (res.status !== 200) {
                      setIsError(true);
                      setMessage(jsonRes.message);

                  } else {
                      //onLoggedIn(jsonRes.token);
                      setIsError(false);
                      setMessage(jsonRes.message);
                     // navigation.navigate("Home");
                  }

              } catch (err) {
                  console.log(err);
              };

          })
          .catch(err => {
              console.log(err);
          });*/
    auth.sendPasswordResetEmail(email)
    .then(
      alert('check your Email Please ..')
    )
    .catch(error => alert(error.message))
  };

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  }
  return <View style={styles.wrapper}>
    <View style={styles.inputField}>
      <TextInput
        placeholderTextColor='#444'
        placeholder='Email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAdress'
        autoFocus={true}
        onChangeText={setEmail}
      />
    </View>


    <Pressable
      titlesize={20}
      style={styles.button}
      onPress={() => onSubmitHandler()}
    >
      <Text style={styles.buttonText}> Envoyer </Text>

    </Pressable>
    <Text style={[styles.message, { color: isError ? 'red' : 'green' }]}>{message ? getMessage() : null}</Text>

  </View>
}

export default ForgotForm;
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,

  },
  button: {
    backgroundColor: '#0096F6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4
  },
  buttonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20,

  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: "center",
    marginTop: 50,
  },
  message: {
    fontSize: 16,
    marginVertical: '5%',
  }
})
