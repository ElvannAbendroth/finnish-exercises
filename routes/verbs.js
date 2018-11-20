var express = require('express');
var router = express.Router();

var VerbTableRow = require('../models/VerbTableRow');
var Verb = require('../models/Verb');

/* GET list of verbs */
router.get('/', function(req, res, next) {

    VerbTableRow
        .findAll()
        .then((arrayOfVerbTableRows) => {
            const arrayOfVerbObjects = [];

            for (let i = 0; i < arrayOfVerbTableRows.length; i++) {
                let verbObject = new Verb(arrayOfVerbTableRows[i]);
                arrayOfVerbObjects.push(verbObject);
            }

            res.send(arrayOfVerbObjects);
        })
        .catch((error) => {
            res.status(400).send(error);
        })

});


module.exports = router;