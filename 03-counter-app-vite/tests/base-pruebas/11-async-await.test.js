import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retornar la URL de la imagen', async () => {
        const resp = await getImagen();

        expect(typeof resp).toBe('string');
    });

    test('getImagen debe retornar un error si no encuentra la imagen', async () => {
        const resp = await getImagen();

        expect(resp).toBe('No se encontró la imagen');
    });
})