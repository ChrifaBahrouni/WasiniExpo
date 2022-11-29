import React from 'react';
import { SafeAreaView , ScrollView  , StyleSheet} from 'react-native';



import Post from '../components/Home/Post';
import { POSTS } from '../data/posts';

function HomeScreen() {
    return (
      <SafeAreaView style={styles.container}>
  
      <ScrollView>
          {POSTS.map((post , index)=>(
              <Post post={post} key={index}/>
          ))}
          
      </ScrollView>

     

  </SafeAreaView>
    );
  }
  export default HomeScreen;
  const styles = StyleSheet.create({
    container: {
      backgroundColor :'black' , 
         flex:1 , 
         
         
    }
})