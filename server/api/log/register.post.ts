import LogHandler from "~/server/handlers/log"

export default defineEventHandler((event) => {
    try {
        const eventName = getRouterParam(event, 'name')
        const data = getRouterParam(event, 'data')

        LogHandler('register', { eventName, data })

        return 'Ok'
    } catch (error) {
        setResponseStatus(event, 500)
        LogHandler('error', { error, path: event._path })

        return { error }
    }
})