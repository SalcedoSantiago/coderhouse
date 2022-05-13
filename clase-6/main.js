const express = require('express');
const Contenedor = require('./Contenedor.js')
const app = express();
const PORT = 8080;

const db = new Contenedor('productos.txt')

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

app.get('/', async (req, res) => {
    res.send(`Hola Mundo!  
    Proba con: 
      /productos
      /productoRandom
    Para ver las funcionalidades`)
})

app.get('/productos', async (req, res) => {
    res.send(await db.getAll())
})

const getProductoRnd = async () => {
    const allProducts = await db.getAll()
    return allProducts[parseInt(Math.random() * allProducts.length)]
}

app.get('/productoRandom', async (req, res) => {
    res.send(await getProductoRnd())
})

app.on('error', (error) => {
    console.log('hubo un error...')
    console.log(error)
})

const initClassContendor = async () => {
    console.log(await db.save({ title: 'casa', price: 404, thumbnail: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png' }));
    console.log(await db.save({ title: 'perro', price: 4, thumbnail: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png' }));
    console.log(await db.save({ title: 'auto', price: 2, thumbnail: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png' }));
    console.log(await db.save({ title: 'mesa', price: 0, thumbnail: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png' }));
    console.log(await db.save({ title: 'silla', price: 3.1416, thumbnail: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png' }));
    console.log(await db.save({ title: 'cama', price: 69, thumbnail: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png' }));
    console.log(await db.save({ title: 'kan', price: 4, thumbnail: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png' }));
    console.log(await db.save({ title: 'fede', price: 4, thumbnail: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png' }));
    console.log(await db.save({ title: 'santi', price: 4, thumbnail: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png' }));
}

initClassContendor();