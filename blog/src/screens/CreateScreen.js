import { Context } from '../context/BlogContext';
import { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';

export default function CreateScreen({navigation}) {

  const {addBlogPost} = useContext(Context)

  return <BlogPostForm
    btName='Create Blog Post'
    onSubmit={(title, content) => {
      addBlogPost(title, content, () => navigation.navigate('Index'))
    }}
  />
}