import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login';
import Inicial from '../pages/pagina_inicial'
import Erro404 from '../pages/404error'
import MyRoute from './login_route'
export default function Routes(){
    return(

           <Switch>
                <MyRoute exact path='/' component={Inicial}/>
                <MyRoute exact path='/login_empresa' component={Login}/>
                <MyRoute exact path='/login_user' component={Login}/>
                <MyRoute exact path='/home' component={Home}/>
                <MyRoute path='*' component={Erro404}/>
           </Switch>

    )
}

