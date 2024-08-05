import LogHandler from "~/server/handlers/log"

export default defineEventHandler((event) => {
    const error = getRouterParam(event, 'error')
    const path = getRouterParam(event, 'path')
    const errorName = getRouterParam(event, 'name')

    LogHandler('error', {
        errorName,
        error,
        path,
    })
})