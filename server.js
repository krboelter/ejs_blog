const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const server = express()
const port = process.env.PORT || 5000
const user = require('./components/user')

server.use(express.json())
server.use(express.static('public'))
server.use('/css', express.static(__dirname + '/public'))

// ejs
server.use(expressLayouts)
server.set('layout', './layouts/index')
server.set('view engine', 'ejs')

// component imports
server.use('/user', user)

server.get('/', (req, res) => {
    res.render('landing', {title: 'Home'})
})

server.get('/blog', (req, res) => {
    res.render('blog', {title: 'Blog'})
})

server.listen(port, () => {
    console.log(`\n***Server listening at http://localhost:${port}***\n`)
})