import { Text, View, TextInput, ImageBackground, Button, KeyboardAvoidingView, Platform } from 'react-native';
import AppStyles from '../Styles/AppStyles';
import InlineTextButton from '../components/InlineTextButton';
import React from 'react';
import { auth, FireDB } from "../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

function SignUp({ navigation }) {
  const background = require("../assets/background.jpg");

  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [confirmPassword, setConfirmPassword] = React.useState("");
  let [validationMessage, setValidationMessage] = React.useState("");

  let validateAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Passwords do not match.");
    } else {
      setValidationMessage("");
    }

    setValue(value);
  };

  let signUp = () => {
    if (password === confirmPassword) {
      // auth.createUserWithEmailAndPassword(email, password)
      // .then((userCredential) => {
      //   FireDB.collection("users")
      //               .doc(user.uid)
      //               .set({
      //                   email: email,
      //                   username: name
      //                   //lastName: lastName,
      //                   //firstName: firstName,
      //               });
      //   sendEmailVerification(email);
      //   navigation.navigate("Main", { user: userCredential.user });
      // })
      // .catch((error) => {
      //   setValidationMessage(error.message);
      // });
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          const user = userCredentials.user;

          FireDB.collection("users")
            .doc(user.uid)
            .set({
              email: email,
              username: name
              //lastName: lastName,
              //firstName: firstName,
            });
          console.log('Registered with:', user.email);
        })
        .catch(error => alert(error.message))
      navigation.navigate("Login")
    } 
  }

  return (
    <ImageBackground style={AppStyles.imageContainer} source={background}>
      <KeyboardAvoidingView
        style={AppStyles.backgroundCover}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>Sign Up</Text>
        <Text style={[AppStyles.errorText]}>{validationMessage}</Text>
        <TextInput
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]}
          placeholder='Email'
          placeholderTextColor="#BEBEBE"
          value={email}
          onChangeText={setEmail} />
        <TextInput
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]}
          placeholder='Password'
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          value={password}
          onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)} />
        <TextInput
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]}
          placeholder='Confirm Password'
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)} />
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>Already have an account? </Text>
          <InlineTextButton text="Login" onPress={() => navigation.navigate("Login")} />
        </View>
        <Button title="Sign Up" onPress={signUp} color="#f7b267" />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
export default SignUp; 
