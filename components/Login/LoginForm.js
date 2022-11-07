import React , {useState , useEffect} from 'react';
import { TouchableOpacity ,  View, Text ,  Button, TextInput, StyleSheet, Image, Pressable } from 'react-native';
const API_URL = 'http://10.0.2.2:5000'; // const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
// import { auth } from '../../firebase';
function LoginForm({navigation}) {
    const opensignup = () => navigation.navigate("Signup");  
    const openforgot= () => navigation.navigate("Forgot");  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false); 
    useEffect(() => {
        // const unsubscribe = auth.onAuthStateChanged(user => {
        //   if (user) {
        //    // navigation.navigate("Main") ; 
        //   }
        // })
        return true 
        // return unsubscribe 
      }, [])
    const onSubmitHandler = () => {
            
                // auth
                //   .signInWithEmailAndPassword(email, password)
                //   .then(userCredentials => {
                //     const user = userCredentials.user;
                //     console.log('Logged in with:', user.email);
                //   })
                //   .catch(error => alert(error.message))
              
        };

    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }
    return (<View style={styles.wrapper}>
        
        <View style={styles.inputField}>
            <TextInput
                placeholderTextColor='#444'
                placeholder=' Phone number , username or email'
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
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={setPassword}
            />
        </View>
        <Text style={[styles.message, { color: isError ? 'red' : 'green' }]}>{message ? getMessage() : null}</Text>
        <View  style={{ alignItems: 'flex-end', marginBottom: 30 }}>
            <Text onPress={ ()=> openforgot()}  style={{ color: '#6BB0F5' }}> Forgot password ? </Text>

        </View>
        <Pressable
            titlesize={20}
            style={styles.button}
            //onPress={() => console.log(' you clicked me')}
            onPress={onSubmitHandler}
        >
            <Text style={styles.buttonText}> Login In </Text>

        </Pressable>
        <View style={styles.signupContainer}>
            <Text> Don't have an account ? </Text>
            <TouchableOpacity onPress={()=> opensignup() } >
                <Text style={{ color: '#68BB0F5' }}> Sign Up </Text>
            </TouchableOpacity>
        </View>
        
    </View>);
}

export default LoginForm;
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 40,
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
