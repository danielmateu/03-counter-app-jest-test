import { getHeroeByIdAsync } from "../src/base-pruebas/09-promesas";

describe('Pruebas con promesas', () => {
    test('Debe de retornar un heroe por su id', (done) => {
        //Inicialización
        const id = 1
        //Estimulo
        getHeroeByIdAsync(id)
            .then(heroe => {
                //Observar el comportamiento
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })

                done()
            })
    })

    test('Debe de retornar un error si el heroe por su id no existe', (done) => {
        //Inicialización
        const id = 100
        //Estimulo
        getHeroeByIdAsync(id)
            .then(heroe => {
                //Observar el comportamiento
                expect(heroe).toBeFalsy()

                done()
            })
            .catch(error => {
                //Observar el comportamiento
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`)

                done()
            })
    })
})