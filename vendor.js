const vendorChunkConfig = {
    coreVendor: [
        'react',
        'react-dom',
        'redux',
        'react-redux',
        'react-router-dom',
        'react-router-last-location',
        'axios',
        'rxjs',
        'redux-observable',
        'qs'
    ],
    uiVendor: ['antd', '@ant-design'],
    otherVendor: ['classnames', 'lodash', 'moment', 'moment-timezone', 'normalize.css', 'prop-types', 'redux-form']
}

module.exports = vendorChunkConfig
