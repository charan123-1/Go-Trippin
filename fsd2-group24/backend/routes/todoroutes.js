const express = require('express');
const router = express.Router()
const Todo = require('../models/todoModels')


//To get the todo collection
router.get("/", async (req, res) => {
    Todo.find({}, (err, result) => {
        if (err) {
                res.send(err)
        }
        res.send(result)
    })
})


//To add individual todo list
router.post('/', async (request, response) => {
    const text = request.body.text
    const todolist = new Todo({
        text: text
    })
    try {
        await todolist.save();
        response.send("Inserted data")
    } catch (err) {
        console.log(err)
    }
})

//To update
router.put("/:id", async (req, res) => {
    const newText = req.body.newText;
    const id = req.params.id;
    try {
        await Todo.findById(id, (err, updatedTodo) => {
            updatedTodo.text = newText
            updatedTodo.save();
            res.send(updatedTodo)
        });
    } catch (error) {
        console.log(error);
    }
})

//Get individual
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    await Todo.findById(id, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
    res.status(200).json(res.student)
})

//To delete individual todo
router.delete("/:id", async (req, res) => {
    const id = req.params.id
    await Todo.findByIdAndRemove(id).exec()
    res.status(200).json(res.todolist)
})


async function getTodo(req, res, next) {
    let todo
    try {
        todo = await Todo.findById(req.params.id)
        if (todo == null) {
            return res.status(400).json({ message: "todo list does not exist" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    res.todolist = todo
    next()
}
module.exports = router