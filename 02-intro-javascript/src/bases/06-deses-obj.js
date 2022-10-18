const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const {nombre: nombre2, edad, clave} = persona;

console.log(nombre2);
console.log(edad);
console.log(clave);

const retornaPersona = ({nombre, edad, clave, rango = 'Capitán'}) => {
    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anyos: edad,
        latlng: {
            lat: 14.3232,
            lng: 34.9233321
        }
    }
}

const {nombreClave, anyos, latlng: {lat, lng}} = retornaPersona(persona);

console.log(nombreClave, anyos, lat, lng);