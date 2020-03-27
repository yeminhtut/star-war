import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import AppRoutes from './AppRoutes'
import store from './store'

import './styles/layout.less'

const App = () => (
    <Provider store={store}>
        <AppRoutes />
    </Provider>
)

const HotReloadApp = hot(App)

const renderApp = Component => {
    ReactDOM.render(<Component />, document.getElementById('root'))
}

renderApp(HotReloadApp)
