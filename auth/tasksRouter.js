const express = require("express");
const router = express.Router()

const Projects = require("./projResoTaskModel.js")


router.post("/", (req, res) => {
    const task = req.body
    Projects.addTasks(task)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "Task can not be added to the database"})
        })
})

router.get("/", (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "Tasks can not be retrieved"})
        })
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    Projects.getByTasksId(id)
        .then(task => {
            res.status(200).json(task)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "Task with the ID can not be retrieved"})
        })
})

router.get('/:id/tasks', async (req, res) => {
    const { id } = req.params
    db.getProjectTasks(id)
        then(projectTasks =>{
            res.status(200).json(projectTasks);
        })
        .catch (err => {
      console.log(error)
      res.status(500).json({ error: "Could not retrieve project resources from database" })
    })
  })


module.exports = router
