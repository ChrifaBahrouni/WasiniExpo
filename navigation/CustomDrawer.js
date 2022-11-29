import { Text, View, StyleSheet, Image,  Dimensions} from "react-native";
import react from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { ImageBackground } from "react-native";
//import Icon from "react-native-ico-material-design";

const {width} = Dimensions.get('screen');

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
     <ImageBackground source={require('../assets/background.jpg')} style={{height: 140}}>
        <Image source={require('../assets/profil.png')} style={styles.userImg} />
     </ImageBackground>
     <View style={styles.drawerListWaper}>
      <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
    
  );
};
export default CustomDrawer;


const styles = StyleSheet.create({
    userImg:{
        width: 110,
        height: 110,
        borderRadius: 110 /2,
        position: "absolute",
        left: width /2 - 110,
        bottom: -110 / 2,
        borderColor: "#FFF",
        borderWidth:4,

    },
    drawerListWaper:{
        marginTop: 110 / 2 +10,
    }
})
