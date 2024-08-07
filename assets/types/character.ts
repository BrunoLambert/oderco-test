import type { FilmType } from "./film"
import type { VehicleType } from "./vehicle"
import type { SpecieType } from "./species"
import type { StarshipType } from "./starships"

export interface CharacterType {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string
}

export interface DetailedCharacterType {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: FilmType[],
    species: SpecieType[],
    vehicles: VehicleType[],
    starships: StarshipType[],
    created: string,
    edited: string,
    url: string
}

export interface CharacterSearchResponseType {
    count: number,
    next: null | string,
    previous: null | string,
    results: CharacterType[]
}