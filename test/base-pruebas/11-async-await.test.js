import { getImagen } from "../../src/base-pruebas/11-async-await";




describe('Pruebas con async-await y Fetch', () => {


    test('Debe de retornar el url de la imagen', async () => {

        const url = await getImagen();
        expect(typeof url).toBe('string');

    })

    //Debe retornar un error si no tenemos apikey
    test('Debe retornar un error si no tenemos apikey', async () => {

        const resp = await getImagen();
        expect(resp).toBe('No se encontró la imagen');

    })



})
