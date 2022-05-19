const express = require('express')
const routerProductos = require('./src/routers/routerProductos.js')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.use('/api/productos', routerProductos)

const server = app.listen(8080, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', (error) => { console.log(error) })



