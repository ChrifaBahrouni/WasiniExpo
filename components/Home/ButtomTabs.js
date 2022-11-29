import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

//import { Divider } from 'react-native-elements'


import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const icon = [
    {
        name: 'Home',
        action: '',
        inactive: ''
    },
    {
        name: 'Search',
        action: '',
        inactive: ''
    },
    {
        name: 'Reels',
        action: '',
        inactive: ''
    },
    {
        name: '',
        action: '',
        inactive: ''
    }
]
function ButtomTabs() {
    const [activeTab, setActiveTab] = useState('Home')
    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: icon.inactive }} style={styles.icon} />
        </TouchableOpacity>
    )
    return <View style={styles.container}>
        {/**  {icon.map((icon, index) => {
            <Icon key={index} icon={icon} />
        })} */}
        <TouchableOpacity onPress={() => setActiveTab('Home')}>
            <AntDesign name='home' size={30} color={'white'} ></AntDesign>
        </TouchableOpacity>
        <TouchableOpacity>
            <AntDesign name='search1' size={30} color={'white'} ></AntDesign>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Forgot')}>
            <AntDesign name='home' size={30} color={'white'} ></AntDesign>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Post')}>
            <Feather  name='shopping-bag' size={30} color={'white'} ></Feather>
        </TouchableOpacity>
    </View>;
}

export default ButtomTabs;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around' , 
        height:50 , 
        paddingTop:10
    },
    icon: {
        width: 30,
        width: 30,
    } , 
    profilePic :{
        borderRadius:50 , 
        borderColor:'#fff'
    }

})
