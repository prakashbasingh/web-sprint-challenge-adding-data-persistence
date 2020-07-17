const express = require("express");
// const projectsRouter = require("../auth/projectsRouter")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")

const server = express();

server.use(helmet())
server.use(express.json());
server.use(morgan("dev"))
server.use(cors())

// server.use("/api/projects", projectsRouter)

server.get("/", (req, res) => {
    res.send("This is backend week 2 sprint challenge and  server is running on port 8888")
})


module.exports = server