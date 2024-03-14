
import {useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const{state} = useContext(Context)
    navigation.getParam('id')
    const blogPost = state.find(blogPost => blogPost.id == navigation.getParam('id'))
    return (
        <View style={styles.row}>
            <Text style={styles.text}>{blogPost.title}</Text>
            <Text style={styles.text}>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({navigation}) =>{
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <EvilIcons name="pencil" style={styles.icon} />
            </TouchableOpacity>
        )
    }
}

export default ShowScreen

const styles = StyleSheet.create({
    row: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    text: {
        fontSize: 18
    },
    icon: {
        fontSize: 35,
        color: 'black',
    }
})