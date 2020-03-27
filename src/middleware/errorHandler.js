const errorHandler = () => next => action => {
    return next(action)
}

export default errorHandler
