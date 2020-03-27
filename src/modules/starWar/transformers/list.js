const list = {
    toState: data => {
        return {
            name: data.name,
            height: Number(data.height),
            mass: data.mass === 'unknown' ? 0 : Number(data.mass),
            gender: data.gender
        }
    }
}

export default list
