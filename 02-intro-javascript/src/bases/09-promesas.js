import { getHeroeById } from "./08-imp-exp";

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        if(heroe) {
            resolve(heroe);
        }
        reject("No se pudo encontrar el heroe")
    }, 2000);
});

promesa.then(console.log)
       .catch(console.warn);

const getHeroeByIdAsync = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if(heroe) {
                resolve(heroe);
            }
            reject("No se pudo encontrar el heroe")
        }, 2000);
    });
}

getHeroeByIdAsync(6).then(console.log)
                    .catch(console.warn);