const express = require("express");

const router = express.Router()


const comments = ['comment 1', 'comment 2', 'comment 3']
const requests = {}

router.get('/favicon.ico', (req, res) => {
    res.end()
})

router.use((req, res, next) => {
    if (requests[req.headers['user-agent']] == undefined) requests[req.headers['user-agent']] = 1
    else requests[req.headers['user-agent']] += 1
    console.log(`${req.headers['user-agent']}\tcount: ${requests[req.headers['user-agent']]}\t${req.method}\t${req.url} \n`)
    next()
})

router.get('/', (req, res) => {
    res.end('Hello World (express)!')
})

router.post('/comments', (req, res) => {
    let body = ''
    req.on('data', (chunk) => {
        body += chunk
    })
    req.on('end', () => {
        if (body) comments.push(body)
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(comments))
    })
})

router.get('/stats', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    let text = '<table>'
    text += '<tr><th style="border: 1px solid black">User Agent</th><th style="border: 1px solid black">Requests</th></tr>'
    for (let key in requests) {
        text += `<tr><td style="border: 1px solid black">${key}</td><td style="border: 1px solid black">${requests[key]}</td></tr>`
    }
    text += '</table>'
    res.end(text)   
})

router.use((req, res) => {
    res.statusCode = 400
    res.end('400 Bad Request!')
})

module.exports = router;