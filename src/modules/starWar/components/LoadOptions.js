import { getSpeciesList } from '../api'

let options = []

const sleep = ms =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, ms)
    })

let currentPage = 1
let hasMorePage = true
const fetchApi = async () => {
    const data = await getSpeciesList(currentPage++)
    data.results.map(item => {
        options.push({
            value: item.url,
            label: item.name,
            people: item.people
        })
    })
    if (!data.next) {
        hasMorePage = false
    }
}

const loadOptions = async prevOptions => {
    if (hasMorePage) {
        await fetchApi()
    }

    await sleep(1000)

    const showedPage = prevOptions.length * currentPage

    return {
        options: options.slice(showedPage),
        hasMore: hasMorePage
    }
}

export default loadOptions
