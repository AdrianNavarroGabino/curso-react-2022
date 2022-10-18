const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55323423,
        lat: 14.3232,
        lng: 34.9233321
    }
};

console.table(persona);

const persona2 = {...persona};

persona2.nombre = 'Peter';

console.table(persona);
console.table(persona2);