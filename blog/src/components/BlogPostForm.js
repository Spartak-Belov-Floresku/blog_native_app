import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function BlogPostForm({btName, initialValues, onSubmit}) {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
        return (
            <View>
            <Text style={styles.lable}>Entry Title:</Text>
            <TextInput
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.input}
            />
            <Text style={styles.lable}>Entry Content:</Text>
            <TextInput
                value={content}
                onChangeText={text => setContent(text)}
                style={styles.input}
            />
            <Button
                title={btName}
                onPress={() => onSubmit(title, content)}
            />
            </View>
      )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom:15,
        padding: 5,
        margin: 5,
      },
      lable: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
      },
})