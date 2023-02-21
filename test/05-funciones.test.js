import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones"

describe('pruebas en 05-funciones', () => {
    //getUser debe devolver un objeto
    test('getUser debe de retornar un objeto', () => {
        //Inicialización
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        //Estimulo
        const user = getUser()
        //Observar el comportamiento
        expect(user).toEqual(userTest)
    });        
})

describe('getUsuarioActivo debe devolver un objeto con un nombre como parámetro', () => { 
    test('getUsuarioActivo debe devolver un objeto', () => {
        //Inicializacion
        const nombre = 'Dani'
        //Estimulo
        const user = getUsuarioActivo(nombre)
        //Observar el comportamiento
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })
    })
})
