import React from 'react';
import { Text ,  View, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import AntDesign
from 'react-native-vector-icons/AntDesign';

function Header({navigation}) {
    return <View style={styles.container}>
        < TouchableOpacity >
            <Image style={styles.log} source={require('../../assets/logo.jpg')} />
        </TouchableOpacity>
        < View style={styles.iconcontainer}>
            < TouchableOpacity  onPress={() =>navigation.navigate('Post')}>
              
                {/**   <Image style={styles.icon}
                    source={{ uri: "https://img.icons8.com/ios/50/000000/topic.png" }}

                />*/}
                 <AntDesign name='plussquare' size={30} color={'white'}  ></AntDesign>
            </TouchableOpacity>
            < TouchableOpacity>
                {/**<Image style={styles.icon}
                    source={{ uri: "https://img.icons8.com/small/16/000000/contacts.png" }}

                /> */}
                 <AntDesign name='hearto' size={30} color={'white'}  ></AntDesign>

            </TouchableOpacity >
            {/** notification message  */}
            < TouchableOpacity  onPress={() =>navigation.navigate('Message')}>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}> 2</Text>
                </View>
               {/** <Image style={styles.icon}
                    source={{ uri: "https://img.icons8.com/small/16/000000/contacts.png" }}

                /> */}
                 <AntDesign name='message1' size={30} color={'white'}  ></AntDesign>
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
        justifyContent:'space-between'

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
        justifyContent: 'center' , 
        zIndex:100

    },
    unreadBadgeText: {

    }

})
