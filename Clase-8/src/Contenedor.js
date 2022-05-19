const fs = require('fs')

class Contenedor {


    constructor(nombreArchivo) {
        this.ruta = nombreArchivo;
        this.productos = []
    }

    async save(object) {
        const productos = await this.getAll();
        const objectToAdd = object;
        let newId;
        if (productos.length === 0) {
            newId = 1
        } else {
            newId = productos[productos.length - 1].id + 1;
        }
        objectToAdd['id'] = newId;
        productos.push(objectToAdd)
        return object.id
    }

    async getById(id) {
        const objectsArray = await this.getAll()
        const element = objectsArray.find(object => object.id === id)
        if (element) {
            return objectsArray.find(object => object.id === id)
        } else {
            return { error: 'producto no encontrado' }
        }
    }

    async getAll() {
        return this.productos
    }

    async deleteById(id) {
        const objectsArray = await this.getAll()
        const element = objectsArray.find(object => object.id === Number(id))
        if (element) {
            objectsArray.splice(objectsArray.findIndex(object => object.id === Number(id)), 1)
        } else {
            return { error: 'producto no encontrado' }
        }
        this.productos = objectsArray
    }

    async modifyById(id, object) {
        const productos = await this.getAll()
        const idProducto = productos.findIndex((producto) => producto.id === parseInt(id))
        if (idProducto === -1) {
            return { error: 'producto no encontrado' }
        }
        const productoAnterior = productos[idProducto]
        productos[idProducto] = { ...object }
        productos[idProducto]['id'] = parseInt(id)
        const actualizado = {
            actualizada: { ...object, id: parseInt(id) }, anterior: productoAnterior
        }
        return actualizado
    }
    async deleteAll() {
        this.productos = []
    }
}


module.exports = Contenedor