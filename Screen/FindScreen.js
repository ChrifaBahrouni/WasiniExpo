import React  from "react";
import { View, Text, Button, StyleSheet } from "react-native";
function FindScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>FindScreen</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Post')}/>
      </View>
    );
  }
  export default FindScreen;