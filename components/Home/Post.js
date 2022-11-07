import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'

//import { Divider} from'react-native-elements'
const postFooterIcons = [
    {
        name: 'like',
        imageUrl: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-like-instagram-flatart-icons-outline-flatarticons.png',

        likedImageUrl: ''
    },
    {
        name: 'comment',
        imageUrl: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-like-instagram-flatart-icons-outline-flatarticons.png',

    },
    {
        name: 'send',
        imageUrl: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-like-instagram-flatart-icons-outline-flatarticons.png',

    },
    
    {
        name: 'Save',
        imageUrl: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/50/000000/external-like-instagram-flatart-icons-outline-flatarticons.png',

    }
]
function Post({ post }) {
    return <View style={{ marginBottom: 30 }}>
        {/**  <Divider width={1} orientation='vertical' /> */}
        <PostHeader post={post} />
        <PostImage post={post} />
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Capition post={post}/>
        <CommentsSection post={post} />
        <Comments post={post} />
        </View>
       



    </View>;
}
const PostHeader = ({ post }) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: post.profile_picture }} style={styles.story} />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>
                {post.user}
            </Text>
        </View>
        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>

    </View>
)
const PostImage = ({ post }) => (
    <View style={{
        width: '100%',
        height: 450,
    }}>
        <Image source={{ uri: post.imageUrl }} style={{ height: '100%', resizeMode: 'cover' }}
        />
    </View>


)
const PostFooter = () => (

<View style={{ flexDirection:'row'}}>
        <View style={styles.leftFooterIconConainer}>
        <TouchableOpacity>
            <AntDesign  name={'like2'} size={30} color={"white"} > </AntDesign>
        </TouchableOpacity>
       {/** <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} name={postFooterIcons[0].name} /> */}
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl}   name={postFooterIcons[1].name}/>
        <Icon imgStyle={styles.footerIcon , styles.shareIcon} imgUrl={postFooterIcons[2].imageUrl}  name={postFooterIcons[2].name} />
       
        </View>
        <View style={{flex:1 , alignItems:'flex-end'}}>
      
        <Icon imgStyle={styles.footerIcon }  name={"save"} />

        </View>
        
    </View>
    
    
    


)
const Icon = ({ imgStyle, imgUrl  ,name}) => (
    <TouchableOpacity>
       {/** <Image style={imgStyle} source={imgUrl} /> */}
        <FontAwesome name={name} size={30} color={"white"}></FontAwesome>
               
    </TouchableOpacity>

)
 const Likes = ({post}) =>(
     <View style={{flexDirection:'row' , margin:4}}>
         <Text style={{ fontWeight:'600' , color:'white'}}>{post.likes.toLocaleString('en')} likes</Text>

     </View>
 )
 const Capition =({post })=>(
     <View style={{marginTop: 5}}>
        <Text style={{color:'white'}}>
        <Text style={{fontWeight:'600'}}>{post.user}</Text>
         <Text>{post.caption} </Text>
        </Text>
     </View>
 )
  const CommentsSection = ({post }) =>(
<View style={{marginTop:5}}>
   { !!post.comments.length && (
<Text style={ {color:'gray'}}>
           View {post.comments.length >1 ? ' all ' : ''} {post.comments.length}{ ' '}
           {post.comments.length > 1 ? 'comments' : 'comment'}
      </Text>
      )}
</View>

  )
   const Comments = ({post})=>(
       <>
       {post.comments.map((comment , index) =>(
        <View key={index} style={{ flexDirection:"row"}} >
            <Text style={{color:'white'}}>
                <Text style={{fontWeight:'600'}}>{comment.user}</Text> {' '}
                {comment.comment}
            </Text>

        </View>
       ))}
       </>
      
   )


export default Post;
const styles = StyleSheet.create({
    story: {

        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501'

    },
    footerIcon: {
        width: 33,
        height: 33,

    }, 
    leftFooterIconConainer : {
         flexDirection:'row'

    }, 
    shareIcon :{

    }



})

