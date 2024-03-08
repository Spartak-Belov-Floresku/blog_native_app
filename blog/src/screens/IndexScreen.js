import { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import {Context} from '../context/BlogContext'

export default function IndexScreen() {

    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
        <View>
            <Button title='Add Post' onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) =>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title} - id: {item.id}</Text>
                        <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <EvilIcons name="trash" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24,
        color: 'black',
    }
})