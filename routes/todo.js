const {Router} = require('express');
const todoModel = require('../models/todo.model')
const router = Router();


router.get('/', async (req, res) => {
    try {
        const data = await todoModel.findAll();
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'});
    }
})

router.post('/', async (req, res) => {
    try {
        const todo = await todoModel.create({
            title: req.body.title,
            done: false
        });
        res.status(201).json({todo});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'});
    }
})

router.put('/:id', async (req, res) => {
    try {
        const todo = await todoModel.findByPk(+req.params.id);
        todo.done = req.body.done;
        await todo.save();
        res.status(200).json({todo});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'});
    }
})

router.delete('/:id', async (req, res) => {
    try {
        // const todos = await todoModel.findAll({
        //     where: {id: +req.params.id}
        // })
        // await todos[0].destroy();
        const todo = await todoModel.findByPk(+req.params.id);
        await todo.destroy();
        res.status(204).json({});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Server error'});
    }
})

module.exports = router;

