import createDataContext from './createDataContext';


const blogReduser = (state, action) => {
    switch(action.type){
        case 'addBlogPost':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content,
                }
            ]
        case 'deleteBlogPost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        default:
            return state
    }
}

const addBlogPost = dispatch => {
    return async (title, content, callback) => {
        try{
            // await axios.post
            dispatch({type: 'addBlogPost', payload: {title, content}});
            callback()
        }catch (e){
            dispatch({type: 'addBlogPost', payload: {title: e, content: e}});
        }
    }
}

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({type: 'deleteBlogPost', payload: id})
    }
}

export const { Context, Provider } = createDataContext(
    blogReduser,
    { addBlogPost, deleteBlogPost },
    []
);