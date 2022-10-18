const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}
const saludar2 = nombre => {
    return `Hola, ${nombre}`;
}
const saludar3 = nombre => `Hola, ${nombre}`;
const saludar4 = () => `Hola, mundo`;

console.log(saludar('Adrián'));
console.log(saludar2('Adrián'));
console.log(saludar3('Adrián'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'usuario'
});

console.log(getUser());

const getUsuarioActivo = nombre => ({
    uid: 'ABC678',
    nombre: nombre
});

const usuarioActivo = getUsuarioActivo('Adrián');
console.log(usuarioActivo);