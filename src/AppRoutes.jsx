import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorNotFound from './pages/error_not_found'
import Layout from './Layout'
import starWarRoute from './modules/starWar/route'

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Layout>
                <Switch>
                    <Route component={starWarRoute} path='/' />
                    <Route component={ErrorNotFound} />
                </Switch>
            </Layout>
        </Switch>
    </BrowserRouter>
)

export default AppRoutes
