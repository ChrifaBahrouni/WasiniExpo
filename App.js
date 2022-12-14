import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./navigation/Tabs";
import Navigation from "./navigation/Navigation";
// import 'react-native-gesture-handler'; 
import DrawerNav from "./navigation/DrawrNAV";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    //   <NavigationContainer>
    //   <DrawerNav/>
    //   <Navigation/>
    // </NavigationContainer>
    <Navigation />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
