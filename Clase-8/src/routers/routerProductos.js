const Contenedor = require('../Contenedor.js')
const { Router } = require('express')
const { route } = require('express/lib/application')

const db = new Contenedor()

const routerProductos = new Router()

routerProductos.get('/', async (req, res) => {
    res.json(await db.getAll())
})

routerProductos.get('/:id', async (req, res) => {
    const { id } = req.params
    res.json(await db.getById(Number(id)))
})

routerProductos.post('/', async (req, res) => {
    const { title, price, thumbnail } = req.body

    const producto = { title, price, thumbnail }

    res.json(await db.save(producto))
})


routerProductos.put('/:id', async (req, res) => {
    const { id } = req.params
    const { title, price, thumbnail } = req.body

    const productoNuevo = { title, price, thumbnail }


    res.json(await db.modifyById(id, productoNuevo))
})

routerProductos.delete('/:id', async (req, res) => {
    const { id } = req.params

    res.json(await db.deleteById(id))
})

module.exports = routerProductos;

