import { CharacterType, DetailedCharacterType } from "~/assets/types/character"
import { FilmType } from "~/assets/types/film"
import LogHandler from "../handlers/log"
import { VehicleType } from "~/assets/types/vehicle"
import { StarshipType } from "~/assets/types/starships"
import { SpecieType } from "~/assets/types/species"

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)

        const resp: CharacterType = await $fetch(`https://swapi.dev/api/people/${query.id}`)

        LogHandler('register', { name: 'Character Accessed', data: query.id })

        const detailedCharacter: DetailedCharacterType = {
            ...resp,
            films: [],
            vehicles: [],
            starships: [],
            species: []
        }

        const getFilms = new Promise(async (resolve) => {
            for (let index = 0; index < resp.films.length; index++) {
                const filmResp: FilmType = await $fetch(resp.films[index]);
                detailedCharacter.films.push(filmResp);
            }
            resolve(true);
        })

        const getVehicles = new Promise(async (resolve) => {
            for (let index = 0; index < resp.vehicles.length; index++) {
                const vehicleResp: VehicleType = await $fetch(resp.vehicles[index]);
                detailedCharacter.vehicles.push(vehicleResp);
            }
            resolve(true);
        })

        const getSpecies = new Promise(async (resolve) => {
            for (let index = 0; index < resp.species.length; index++) {
                const specieResp: SpecieType = await $fetch(resp.species[index]);
                detailedCharacter.species.push(specieResp);
            }
            resolve(true);
        })

        const getStarships = new Promise(async (resolve) => {
            for (let index = 0; index < resp.starships.length; index++) {
                const starshipResp: StarshipType = await $fetch(resp.starships[index]);
                detailedCharacter.starships.push(starshipResp);
            }
            resolve(true);
        })

        await Promise.all([getFilms, getSpecies, getVehicles, getStarships]);

        return detailedCharacter;
    } catch (error) {
        setResponseStatus(event, 500)
        LogHandler('error', { error, path: event._path })

        return { error }
    }
})