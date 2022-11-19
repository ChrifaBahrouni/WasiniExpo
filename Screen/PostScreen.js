import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native';
import { FireDB } from '../firebase';


//import database from '@react-native-firebase/database';
//import { db } from 'firebase'; 
//const [shopminders, setShopminders] = useState([]);

function PostScreen() {
 //const [name, onChangeName] = React.useState('');
 //const [caption, setCaption] = useState('');
 const [title, setTitle] = useState(''); 
 const [Description, setDescription] = useState(''); 
 const [prix, setPrix] = useState(''); 
 const [lien, setLien] = useState(''); 
 const [poids, setPoids] = useState(''); 
 const [imageUrl, setImageUrl] = useState('');
 const [message, setMessage] = useState('');
 const [isError, setIsError] = useState(false);
 const handleSubmit = () => {
     FireDB.collection("posts")
         .add({
             imageUrl: 'https://envato-shoebox-0.imgix.net/7338/6813-8ae8-4ef7-b723-caed3f51afcd/MON1221176.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=ed965603d21b27a86ad312f185d93413',
             user: 'chrifabahrouni',
             title: title , 
             description : Description , 
             prix : prix , 
             lien : lien , 
             poids : poids

             
         })
         .then(() => {
             console.log('added!');
          
            // Alert.alert('Item saved successfully');
         })
         .catch(error => alert(error.message))


 };
  return (
      <View style={styles.wrapper}>
    
    <View style={styles.inputField}>
          <TextInput
              placeholderTextColor='#444'
              placeholder=' Image URL '
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAdress'
              autoFocus={true}
              onChangeText={setImageUrl}
          />
      </View>
      <View style={styles.inputField}>
          <TextInput
              placeholderTextColor='#444'
              placeholder=' Enter  Title '
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAdress'
              autoFocus={true}
              onChangeText={setTitle}
          />
      </View>

      <View style={styles.inputField}>
          <TextInput
              placeholderTextColor='#444'
              placeholder='  Enter Description '
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAdress'
              autoFocus={true}
              onChangeText={setDescription}
          />
      </View>
      <View style={styles.inputField}>
          <TextInput
              placeholderTextColor='#444'
              placeholder='  Enter  Lien Web '
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAdress'
              autoFocus={true}
              onChangeText={setLien}
          />
      </View>
      <View style={styles.inputField}>
          <TextInput
              placeholderTextColor='#444'
              placeholder=' Enter  Prix  '
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAdress'
              autoFocus={true}
              onChangeText={setPrix}
          />
      </View>
      <View style={styles.inputField}>
          <TextInput
              placeholderTextColor='#444'
              placeholder='  Enter  Poids '
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAdress'
              autoFocus={true}
              onChangeText={setPoids}
          />
      </View>  
      
     

      <Text style={[styles.message, { color: isError ? 'red' : 'green' }]}>{message ? getMessage() : null}</Text>

      <Pressable
          titlesize={20}
          style={styles.button}

          //onPress={onSubmitHandler}
          onPress={handleSubmit}
      >
          <Text style={styles.buttonText}> Create </Text>

      </Pressable>


  </View>
    );
  }
 
  export default PostScreen;
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