import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { Context } from '../context/BlogContext';
import React, { useContext, useState } from 'react'

export default function CreateScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPost} = useContext(Context)
  return (
    <View>
      <Text style={styles.lable}>Entry Title:</Text>
      <TextInput value={title} onChangeText={text => setTitle(text)} style={styles.input}/>
      <Text style={styles.lable}>Entry Content:</Text>
      <TextInput value={content} onChange={text => setContent(text)} style={styles.input}/>
      <Button
        title='Add Blog Post'
        onPress={() => {
            addBlogPost(title, content, () => {
              navigation.navigate('Index');
            });
          }
        }
      />
    </View>
  )
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