import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import SpecieListContainer from './containers/SpecieListContainer'

class route extends Component {
    render() {
        return (
            <Switch>
                <Route component={SpecieListContainer} path='/' />
            </Switch>
        )
    }
}

export default route
