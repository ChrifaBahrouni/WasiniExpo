import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { USERS } from '../../data/users';
function Stories() {
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index} style={{ alignItems: 'center' }}>
                        <Image style={styles.story} source={{ uri: story.image }}></Image>
                        <Text style={{ color: 'white' }}>
                            {story.user.length > 11
                                ? story.user.slice(0, 10).toLowerCase() + '...'
                                : story.user.toLowerCase()}

                        </Text>
                    </View>

                ))}

            </ScrollView>
            <Text style={{ color: 'white' }}> STORIES</Text>

        </View>
    )
}

export default Stories;
const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501'

    }
})
