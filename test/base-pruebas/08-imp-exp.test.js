import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en getHeroeById', () => {

    test('Debe retornar un heroe por id', () => {
        //Inicialización
        const id = 1
        //Estimulo
        const heroe = getHeroeById(id)
        //Observar el comportamiento
        const heroeData = heroes.find(h => h.id === id)
        expect(heroe).toEqual(heroeData)
    })

    test('Debe retornar undefined si heroe no existe', () => {
        //Inicialización
        const id = 10
        //Estimulo
        const heroe = getHeroeById(id)
        //Observar el comportamiento
        expect(heroe).toBeFalsy()
    })
})

describe('Pruebas en getHeroesByOwner', () => {

    test('Debe retornar un arreglo con los heroes de DC', () => {
        //Inicialización
        const owner = 'DC'
        //Estimulo
        const heroes = getHeroesByOwner(owner)
        //Observar el comportamiento
        const heroesData = heroes.filter(h => h.owner === owner)
        expect(heroes).toEqual(heroesData)
    })

    test('Debe retornar un arreglo con los heroes de Marvel', () => {
        //Inicialización
        const owner = 'Marvel'
        //Estimulo
        const heroes = getHeroesByOwner(owner)
        //Observar el comportamiento
        const heroesData = heroes.filter(h => h.owner === owner)
        expect(heroes).toEqual(heroesData)
    })

    //Debe retprnar un arreglo de DC con length === 3 y toEqual al arreglo filtrado
    test('Debe retornar un arreglo de tres heroes de DC', () => {
        //Inicialización
        const owner = 'DC'
        //Estimulo
        const heroes = getHeroesByOwner(owner)
        //Observar el comportamiento
        const heroesData = heroes.filter(h => h.owner === owner)
        expect(heroes.length).toBe(3)
        expect(heroes).toEqual(heroesData)
    })

    //Debe retornar un arreglo de Marvel con length === 2 y toEqual al arreglo filtrado

    test('Debe retornar un arreglo de dos heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes.length).toBe(2);
        expect(heroes).toEqual(heroesData);

    })

    test('Debe retornar un arreglo vacio si el owner no existe', () => {
        //Inicialización
        const owner = 'Capcom'
        //Estimulo
        const heroes = getHeroesByOwner(owner)
        //Observar el comportamiento
        const heroesData = heroes.filter(h => h.owner === owner)
        expect(heroes.length).toBe(0)
        expect(heroes).toEqual(heroesData)
    })
})


