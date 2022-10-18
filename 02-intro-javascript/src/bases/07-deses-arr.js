const personajes = ['Goku', 'Vegeta', 'Trunks'];

//console.log(personajes[1]);
//console.log(personajes[0]);
//console.log(personajes[2]);

const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const usaEstado = (valor) => {
    return [valor, () => console.log('Hola Mundo')];
}

const arr = usaEstado('Goku');
console.log(arr);
arr[1]();

const [nombre, setNombre] = usaEstado('Goku');
console.log(nombre);
setNombre();