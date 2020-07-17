const express = require("express");
const router = express.Router()

const Projects = require("./projResoTaskModel.js")

router.post("/", (req, res) => {
    const resource = req.body
    Projects.addResources(resource)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(error => {
            res.status(500).json({message: "Resource can not be added to the database"})
        })
})

router.get("/", (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "resources can not be retrieved"})
        })
})

router.get("/:id", (req, res) => {
    const { id } = req.params
    Projects.getByResourcesId(id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message: "Resource with the ID can not be retrieved"})
        })
})


module.exports = router
