import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Signin from './auth/Signin'
import Home from './core/Home'
import Signup from './user/Signup'
import Users from './user/Users'

const MainRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/users' component={Users} />
                <Route path='/signup' component={Signup}/>
                <Route path='/signin' component={Signin}/>
            </Switch>
        </>
    )
}

export default MainRouter
