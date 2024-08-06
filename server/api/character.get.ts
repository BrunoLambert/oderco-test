import { CharacterType } from "~/assets/types/character"
import LogHandler from "../handlers/log"

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)

        const resp: CharacterType = await $fetch(`https://swapi.dev/api/people/${query.id}`)
    
        LogHandler('register', { name: 'Character Accessed', data: query.id })

        return resp
    } catch (error) {
        setResponseStatus(event, 500)
        LogHandler('error', { error, path: event._path })

        return { error }
    }
})