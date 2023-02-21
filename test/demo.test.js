
describe('Pruebas en <DemoComponent', () => {

    test('Esta prueba no debe de fallar', () => {
        //Inicializacion
        const mensaje = 'Hola Mundo'
        //Estimulo
        const mensaje2 = mensaje.trim()
        //Observar el comportamiento
        expect(mensaje).toBe(mensaje2)

    })
    
})
