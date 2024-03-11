const morgan = require('morgan')
const helmet = require('helmet');

const myMorgan = morgan('dev')
const myHelmet = helmet()

function checkAuthorization(req, res, next){
    console.log('authorization')
    const apiKey = req.query.apiKey;
    if (apiKey !== 'parol') {
        res.status(400).send('Unauthorized')
    } else {
        next();
    }
}

const comments = ['comment 1', 'comment 2', 'comment 3']


function checkEmptyBody(req, res, next){
    let body = req.body 
    console.log(body)
    if (body.name) {
        comments.push(body)
        res.json(comments)
        // res.setHeader('Content-Type', 'application/json')
        // res.send(JSON.stringify(comments))
    }
    else res.status(400).send('Empty body')
}

function badRequest(req, res) {
    res.status(400).send('Bad Request');
}

module.exports = {checkAuthorization, 
    badRequest,
    checkEmptyBody, 
    myMorgan, 
    myHelmet};