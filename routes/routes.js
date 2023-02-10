const express = require('express');
const bodyParser = require('body-parser');
const logger = require('../logger/logger')

const apiRouter = express();

// let title = [{
//     description: 'RHS 50 x 30 x 2.9',
//     height: 50,
//     width: 30,
//     thk: 2.9,
//     mass: 3.31,
//     area: 4.21,
//     Ixx: 13.2,
//     Iyy: 5.8,
//     Zxx: 5.29,
//     Zyy: 3.87
// }]

const sectionController = require('../controller/sectionController')

apiRouter.use(bodyParser.json())

apiRouter.get('/sections', (req, res) => {
    sectionController.getSections().then(data => res.json(data))
});


apiRouter.post('/section', (req, res) => {
    console.log('POST:::',req)
    sectionController.createSection(req.body.section).then(data => res.json(data))
});

apiRouter.put('/section', (req, res) => {
    console.log('PUT:::', req)
    sectionController.updateSection(req.body.section).then(data => res.json(data))
});

apiRouter.delete('/section/:id', (req, res) => {
    sectionController.updateSection(req.params.id).then(data => res.json(data))
});

apiRouter.get('/sections/:title', (req, res) => {
    sectionController.getSectionByTitle(req.params.title).then(data => res.json(data))
});

apiRouter.get("*", function(req, res) {
    logger.info("empty API route");
    res.send("There's nothing here either");
})

module.exports = apiRouter