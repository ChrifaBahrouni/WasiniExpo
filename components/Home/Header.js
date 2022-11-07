import React from 'react';
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign
    from 'react-native-vector-icons/AntDesign';

function Header({ navigation }) {
    return <View style={styles.container}>
        < TouchableOpacity >
   
        <TextInput
        
          style={{
            backgroundColor: 'whitesmoke',
            color: 'grey',
            paddingLeft: 40,
            borderRadius: 25,
            height: 35,
            marginTop: 10 , 
            width : 300
          }}
          placeholder="Type Here..."
        //onChangeText={(search) => props.queryUsersByUsername(search).then(setUsers)} 
        />
     
            {/* <Image style={styles.log} source={require('../../assets/logo.jpg')} /> */}
        </TouchableOpacity>
        < View style={styles.iconcontainer}>
            < TouchableOpacity onPress={() => navigation.navigate('Post')}>
                <AntDesign name='plussquare' size={30} color={'white'}  ></AntDesign>
            </TouchableOpacity>
            

        </View>


    </View>
}

export default Header;
const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row',
        margin: 20

    },
    iconcontainer: {
        flexDirection: "row",
        justifyContent: 'space-between'

    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain'

    },
    log: {
        width: 100,
        height: 50,
        resizeMode: 'contain'
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 10,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100

    },
    unreadBadgeText: {

    }

})
