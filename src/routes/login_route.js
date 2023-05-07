import React from "react";
import{Route, Redirect} from 'react-router-dom'

export default function MyRoute({component:Component, isClosed, ...rest}){
    let isLoged = false
    if(isClosed && !isLoged){
    return(
        <Redirect to={{pathname:'/login_user' }} />
    )}
    return <Route {...rest} component = {Component}/>
}