import { CharacterSearchResponseType } from "~/assets/types/character"
import LogHandler from "../handlers/log"

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)

        const resp: CharacterSearchResponseType = await $fetch(`https://swapi.dev/api/people/?search=${query.search}`)

        let results = resp.results.map(result => ({
            id: result.url.split('people/')[1].replace('/', ''),
            name: result.name,
            height: result.height,
            mass: result.mass
        }))

        LogHandler('register', { name: 'Search Text', data: query.search })

        return { data: { ...resp, results } }
    } catch (error) {
        setResponseStatus(event, 500)
        LogHandler('error', { error, path: event._path })

        return { error }
    }
})