import React, { Component } from 'react'
import { node } from 'prop-types'
import { Header } from 'components'

class Layout extends Component {
    render() {
        const { children } = this.props

        return (
            <div className='layout'>
                <Header />
                <div className='layout__main'>{children}</div>
            </div>
        )
    }
}

Layout.propTypes = {
    children: node
}

export default Layout
