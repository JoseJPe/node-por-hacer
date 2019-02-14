const fs = require('fs');

let listadoPorHacer = [];


let guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)

    });


}

const getListado = () => {

    cargarDB();

    return listadoPorHacer;
}


const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];

    }



}




let crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;


}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    // el index me va a retornar un valor numerico del arreglo, pero si no consigue ninguno que coincida retorna -1 y por eso el >= en el siguiente if ;v
    if (index >= 0) {

        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}






module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}