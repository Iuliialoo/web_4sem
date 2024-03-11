const express = require('express');
const controllers = require('./route/base.js');
const path = require('path');
const middleware = require("./mid/middleware.js")
const helmet = require('helmet');
const routerDB = require("./route/mongodb.js")

const app = express()

app.use(express.json())

app.use(middleware.myHelmet)

const hostname = '127.0.0.1'
const port = 3000

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/\nStart: ${new Date()}`)
})

app.use(middleware.myMorgan)

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/v1', controllers)
app.use('/v2', routerDB)

// app
//   .route("/comments")
//   .get(commentsController.getComments)
//   .post(express.json(), commentsController.postComments);

// app.get("/comments/:id", commentsController.getComment);

app.use(middleware.badRequest)