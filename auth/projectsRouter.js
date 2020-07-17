const express = require("express");
const router = express.Router()

// const Projects = require("./projectsModel.js")

// :::======:::  POST :::======::: \\
router.post("/", (req, res) => {
    const project = req.body
    Projects.addProjects(project)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "Project can not be added to the database"})
        })
})


// :::======:::  get :::======::: \\
router.get("/", (req, res) => {
   
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "projects can not be retrieved from the database"})
        })
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    Projects.getByProjectsId(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "Project with the ID can not be retrieved"})
        })
})

module.exports = router