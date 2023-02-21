import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";
import heroes from "../src/data/heroes";

describe('Pruebas en getHeroeById', () => {
    test('Debe retornar un heroe por id', () => {
        //Inicialización
        const id = 1
        //Estimulo
        const heroe = getHeroeById(id)
        //Observar el comportamiento
        const heroeData = heroes.find( h => h.id === id)
        expect(heroe).toEqual(heroeData)
    })
    test('Debe retornar undefined si heroe no existe', () => {
        //Inicialización
        const id = 10
        //Estimulo
        const heroe = getHeroeById(id)
        //Observar el comportamiento
        expect(heroe).toBe(undefined)
    })
})

describe('Pruebas en getHeroesByOwner', () => {
    test('Debe retornar un arreglo con los heroes de DC', () => {
        //Inicialización
        const owner = 'DC'
        //Estimulo
        const heroes = getHeroesByOwner(owner)
        //Observar el comportamiento
        const heroesData = heroes.filter( h => h.owner === owner)
        expect(heroes).toEqual(heroesData)
    })
    test('Debe retornar un arreglo con los heroes de Marvel', () => {
        //Inicialización
        const owner = 'Marvel'
        //Estimulo
        const heroes = getHeroesByOwner(owner)
        //Observar el comportamiento
        const heroesData = heroes.filter( h => h.owner === owner)
        expect(heroes).toEqual(heroesData)
    })
    
    
})


