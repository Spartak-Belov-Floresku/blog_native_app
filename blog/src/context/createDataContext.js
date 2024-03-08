import React, { useReducer } from "react";

export default (reducer, actions, initialSate) => {
    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialSate);

        const boundActions = {};

        for (let key in actions){
            // key: addBlogPost
            // action obj use key to get addBlogPost func and pass argiment dispatch
            boundActions[key] = actions[key](dispatch)
        }

        return <Context.Provider value={{state, ...boundActions}}>{children}</Context.Provider>
    }

    return { Context, Provider}
}