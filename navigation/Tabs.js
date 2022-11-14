import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import HomeScreen from "../Screen/HomeScreen";
import FindScreen from "../Screen/FindScreen";
import PostScreen from "../Screen/PostScreen";
import ChatScreen from "../Screen/ChatScreen";
import ProfilScreen from "../Screen/ProfilScreen";
import FavScreen from "../Screen/FavScreen";
import { Image, View ,Text} from "react-native";
const Tab = createBottomTabNavigator();

const Tabs =() => {
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarShowLabel:false,
            
        })
    }
         >
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon:({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', }}>
                    <Image source={require('../assets/home.png')}
                    resizeMode='contain'
                    style={{
                        width:35,
                        height:30,
                    }}
                    />
                    <Text style={{color:focused}} >HOME</Text>
                </View>

            )
        }} />
        <Tab.Screen name="Chat" component={ChatScreen} options={{
            tabBarIcon:({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', }}>
                    <Image source={require('../assets/chat.png')}
                    resizeMode='contain'
                    style={{
                        width:35,
                        height:30,
                    }}
                    />
                    <Text style={{color:focused}} >CHAT</Text>
                </View>

            )
        }}
        />
           <Tab.Screen name="Post" component={PostScreen} options={{
            tabBarIcon:({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', }}>
                    <Image source={require('../assets/pluss.png')}
                    resizeMode='contain'
                    style={{
                        width:35,
                        height:30,
                    }}
                    />
                    <Text style={{color:focused}} >POST</Text>
                </View>

            )
        }} 
        />
                 <Tab.Screen name="Fav" component={FavScreen} options={{
            tabBarIcon:({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', }}>
                    <Image source={require('../assets/fav.png')}
                    resizeMode='contain'
                    style={{
                        width:35,
                        height:30,
                    }}
                    />
                    <Text style={{color:focused}} >FAV</Text>
                </View>

            )
        }} 
        />
        <Tab.Screen name="Find" component={FindScreen} options={{
            tabBarIcon:({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center',}}>
                    <Image source={require('../assets/cherche.png')}
                    resizeMode='contain'
                    style={{
                        width:35,
                        height:30,
                    }}
                    />
                    <Text style={{color:focused}} >FIND</Text>
                </View>

            )
        }}
        />
     
        <Tab.Screen name="Profil" component={ProfilScreen} options={{
            tabBarIcon:({focused}) => (
                <View style={{alignItems:'center', justifyContent:'center', }}>
                    <Image source={require('../assets/profil.png')}
                    resizeMode='contain'
                    style={{
                        width:35,
                        height:30,
                    }}
                    />
                    <Text style={{color:focused}} >PROFIL</Text>
                </View>

            )
        }}
        />
        
      </Tab.Navigator>
    );

};

export default Tabs;