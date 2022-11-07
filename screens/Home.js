import React from 'react';
import { SafeAreaView , ScrollView  , StyleSheet} from 'react-native';
import Header from '../components/Home/Header';
import Post from '../components/Home/Post';
import { POSTS } from '../data/posts';
//import ButtomTabs from '../components/Home/ButtomTabs';
function Home({navigation}) {
    return (
        
            <SafeAreaView style={styles.container}>
                <Header navigation={navigation} />
              
                <ScrollView>
                    {POSTS.map((post , index)=>(
                        <Post post={post} key={index}/>
                    ))}
                    
                </ScrollView>
            {/**    <ButtomTabs/> */}
               

            </SafeAreaView>
        

    )
}




export default Home;
const styles = StyleSheet.create({
    container: {
      backgroundColor :'black' , 
         flex:1 , 
         
         
    }
})