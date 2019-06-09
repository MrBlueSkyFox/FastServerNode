const express = require('express');
const router = express.Router();
const Task = require('../db/Art_task');
const checkAuth = require('../middle/check_auth');

router.get('/', (req, res, next) => {
    Task.getAllTask(function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            return res.json(rows);
        }


    });
});

router.post('/', checkAuth, (req, res, next) => {
    Task.addTask(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.post('/s', checkAuth, (req, res, next) => {

    Task.addTask(req.body.item, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body.item);
        }
    });
});

router.put('/', checkAuth, (req, res, next) => {
    console.log(req.body)


    Task.updateTask(req.body.item, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows)
        }
    });
});
router.delete('/', (req, res, next) => {
    console.log(req.body);

    Task.deleteTask(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;