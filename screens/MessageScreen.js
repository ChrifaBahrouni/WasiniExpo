import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/users/user-3.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/users/user-1.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/users/user-4.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-6.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-7.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const MessagesScreen = ({ navigation }) => {
  return (
    <View style={styles.Container} >
      <View style={{ marginVertical: 30, paddingHorizontal: 20 }}>
        <TextInput
        
          style={{
            backgroundColor: 'whitesmoke',
            color: 'grey',
            paddingLeft: 40,
            borderRadius: 25,
            height: 40,
            marginTop: -10 , 
            width : 350
          }}
          placeholder="Type Here..."
        //onChangeText={(search) => props.queryUsersByUsername(search).then(setUsers)} 
        />
      </View>

      <View style={[styles.borderTopGray]}>
        <FlatList
          data={Messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.Card} onPress={() => navigation.navigate('chat', { userName: item.userName })}>
              <View style={styles.UserInfo} >
                <View style={styles.UserImgWrapper}>
                  <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={item.userImg} />
                </View>
                <View style={styles.TextSection} >
                  <View style={styles.UserInfoText} >
                    <Text style={styles.UserName} >{item.userName}</Text>
                    <Text style={styles.PostTime}  >{item.messageTime}</Text>
                  </View>
                  <Text style={styles.MessageText} >{item.messageText}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },

  earchBar: {
    backgroundColor: 'whitesmoke',
    color: 'grey',
    paddingLeft: 10,
    borderRadius: 8,
    height: 40,
    marginTop: -5
  },


  Card: {
    width: '100%'
  },

  UserInfo: {
    flexDirection: 'row',
    justifycontent: 'space-between'
  },

  UserImgWrapper: {
    paddingtop: 15,
    paddingbottom: 15
  }
  ,
  UserImg: {
    width: '50px',
    height: '50px',
    borderRadius: '25px'
  }
  ,
  TextSection: {
    flexDirection: 'column',
    justifycontent: 'center',
    padding: 15,
    paddingleft: 0,
    marginleft: '10px',
    width: 300,

    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  }
  ,

  UserInfoText: {
    flexdirection: 'row',
    justifyContent: 'space-between',

  }

  , UserName: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },

  PostTime: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'Lato-Regular'
  },

  MessageText: {
    color: '#333333'
  }

})


