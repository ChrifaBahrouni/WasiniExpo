import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Button, TextInput, StyleSheet, Image, Pressable } from 'react-native';
const API_URL = 'http://10.0.2.2:5000';// const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
// import { auth, FireDB } from '../../firebase';
// import * as Facebook from 'expo-facebook'
// import * as firebase from "firebase";
// import * as Google from 'expo-google-app-auth';
// import * as GoogleSignIn from 'expo-google-sign-in';
/*import {
    FACEBOOK_APP_ID,
    ANDROID_CLIENT_ID,
    IOS_CLIENT_ID
} from 'react-native-dotenv'

const facebookAppId = {
    FACEBOOK_APP_ID
}
const androidClientId = {
    ANDROID_CLIENT_ID,

}
const IOSClientId = {
    IOS_CLIENT_ID
}
*/
function SignupForm({ navigation }) {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const openlogin = () => navigation.navigate("Login");
    //const db = firestore.firestore()
    const onSubmitHandler = () => {
        //const handleSignUp = () => {

        // auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then(userCredentials => {
        //         const user = userCredentials.user;

        //         FireDB.collection("users")
        //             .doc(user.uid)
        //             .set({
        //                 email: email,
        //                 username: name
        //                 //lastName: lastName,
        //                 //firstName: firstName,
        //             });
        //         console.log('Registered with:', user.email);
        //     })
        //     .catch(error => alert(error.message))
        //navigation.navigate("Login")
        // }
        {/**const payload = {
            email,
            name,
            password,
        };
        fetch(`${API_URL}/${'signup'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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
                        navigation.navigate("Home");
                    }

                } catch (err) {
                    console.log(err);
                };

            })
            .catch(err => {
                console.log(err);
            }); */}

    };
    
    async function signInWithFacebook() {
        // try {
        //     await Facebook.initializeAsync({
        //         appId: '2020759481447792',
        //     });
        //     const { type, token, expirationDate, permissions, declinedPermissions } =
        //         await Facebook.logInWithReadPermissionsAsync({
        //             permissions: ['public_profile'],
        //         });

        //     if (type === 'success') {
        //         // Get the user's name using Facebook's Graph API
        //         /* const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        //           alert('Logged in!', `Hi ${(await response.json()).name}!`);
        //           console.log(' token  : ' ,token )
        //          console.log(' data of user : ' ,response.json() )*/
        //         await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        //         const credential = firebase.auth.FacebookAuthProvider.credential(token);
        //         const facebookProfileData = await firebase.auth().signInWithCredential(credential);
        //         // this.onLoginSuccess.bind(this)
        //         // console.log(' facebookProfileData' , facebookProfileData) FireDB.collection("users")
        //        FireDB.collection("users")
        //             .add({
        //                 email: facebookProfileData.user.providerData[0].email,
        //                 username: facebookProfileData.user.providerData[0].displayName,
        //                 image: facebookProfileData.user.providerData[0].photoURL
        //                 //lastName: lastName,
        //                 //firstName: firstName,
        //             })
        //             .then(() => {

        //             })
        //        // console.log(' user information  : ', facebookProfileData.user.providerData[0].displayName)
        //     }// else {
        //     // type === 'cancel'
        //     //}
        // } catch ({ message }) {
        //     alert(`Facebook Login Error: ${message}`);
        // }
    }
    async function signInWithGoogle() {
       /* try {
          const result = await Expo.Google.logInAsync({
            androidClientId: androidClientId,
            iosClientId: IOSClientId,
            behavior: 'web',
            iosClientId: '', //enter ios client id
            scopes: ['profile', 'email']
          });
          
          if (result.type  === 'success') {
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
            const googleProfileData = await firebase.auth().signInWithCredential(credential);
            this.onLoginSuccess.bind(this);
          }
        } catch ({ message }) {
          alert('login: Error:' + message);
        }*/
      /*  const { type, accessToken, user } = await Google.logInAsync({
            //iosClientId: `<YOUR_IOS_CLIENT_ID_FOR_EXPO>`,
            androidClientId: `387350315371-gca2bt3rnhtkrlgff9nk01hmvib922va.apps.googleusercontent.com`,
            //iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
           // androidStandaloneAppClientId: `<387350315371-gca2bt3rnhtkrlgff9nk01hmvib922va.apps.googleusercontent.com`,
          });
          console.log('type ' , type)
          if (type === 'success') {
            // `accessToken` is now valid and can be used to get data from the Google API with HTTP requests 
            console.log(user);
          }*/
        //   try {
        //     const result = await Google.logInAsync({
        //       androidClientId: '387350315371-gca2bt3rnhtkrlgff9nk01hmvib922va.apps.googleusercontent.com',
        //      // iosClientId: YOUR_CLIENT_ID_HERE,
        //       scopes: ['profile', 'email'],
        //     });
        //     console('user', result.user)
        //     if (result.type === 'success') {
        //       return result.accessToken;
        //       console('user', result.user)
        //     } else {
        //       return { cancelled: true };
        //     }
        //   } catch (e) {
        //     return { error: true };
        //   }
      }
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
        <View style={styles.inputField}>
            <TextInput
                placeholderTextColor='#444'
                placeholder='Username'
                autoCapitalize='none'
                autoCorrect={false}

                textContentType='emailAddress'
                onChangeText={setName}
            />
        </View>
        <View style={styles.inputField}>
            <TextInput
                placeholderTextColor='#444'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={setPassword}
            />
        </View>
        <Text style={[styles.message, { color: isError ? 'red' : 'green' }]}>{message ? getMessage() : null}</Text>

        <Pressable
            titlesize={20}
            style={styles.button}
            // onPress={() =>  console.log('sign up ')}
            onPress={onSubmitHandler}
        >
            <Text style={styles.buttonText}>Sign Up  </Text>

        </Pressable>
        <TouchableOpacity
            style={{ width: "100%", marginTop: 10 }}
            onPress={() => signInWithFacebook()}>
            <View style={styles.FacebookButtom} >
                <Text
                    style={{
                        letterSpacing: 0.5,
                        fontSize: 16,
                        color: "#FFFFFF"
                    }}
                >
                    Continue with Facebook
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
            style={{ width: "100%", marginTop: 10 }}
            onPress={()=> signInWithGoogle()}>
            <View style={styles.googleButton}>
                <Text
                    style={{
                        letterSpacing: 0.5,
                        fontSize: 16,
                        color: "#707070"
                    }}
                >
                    Continue with Google
                </Text>
            </View>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
            <Text> Already have an account ? </Text>
            <TouchableOpacity onPress={() => openlogin()}>
                <Text style={{ color: '#68BB0F5' }}> Login In  </Text>
            </TouchableOpacity>
        </View>

    </View>
}

export default SignupForm;
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 30,
    },
    googleButton: {
        backgroundColor: "#FFFFFF",
        height: 44,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 22,
        borderWidth: 1,
        borderColor: "#707070"
    },
    FacebookButtom: {
        backgroundColor: "#3A559F",
        height: 44,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 22

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
        marginTop: 10,
    },
    message: {
        fontSize: 16,
        marginVertical: '5%',
    }
})