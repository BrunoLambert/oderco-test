export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)

        const resp: any = await $fetch(`https://swapi.dev/api/people/?search=${query.search}`)
        console.log(resp)

        return { data: resp }
    } catch (error) {
        console.log(error)
    }
})