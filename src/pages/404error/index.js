import React from 'react'
import history from '../../services/history'
export default function Erro404(){
    history.push('/')
    return(
        <h1>Erro404</h1>
    )
}