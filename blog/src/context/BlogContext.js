import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';


const blogReduser = (state, action) => {
    switch(action.type){
        case 'getBlogPosts':
            return action.payload
        case 'editBlogPost':
            return state.map(blogPost => blogPost.id === action.payload.id? action.payload: blogPost)
        case 'deleteBlogPost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        default:
            return state
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        try {
            const response = await jsonServer.get('/');
            dispatch({type: 'getBlogPosts', payload: response.data});
        } catch (error) {
            console.error('Axios Error:', error);
        }
    };
};


const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        try{
            await jsonServer.post('/', {title, content})
            if (callback)
                callback()
        }catch (e){
            console.error(e);
        }
    }
}

const deleteBlogPost = dispatch => {
    return async id => {
        await jsonServer.delete(`/${id}`)
        dispatch({type: 'deleteBlogPost', payload: id})
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/${id}`, {title, content})
        dispatch({
            type: 'editBlogPost',
            payload : {id, title, content}
        });
        if (callback)
            callback();
    }
}

export const { Context, Provider } = createDataContext(
    blogReduser,
    { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost, },
    []
);