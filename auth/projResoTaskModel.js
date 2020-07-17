const db = require("../data/dbConfig.js");

module.exports = {
    addProjects,
    getProjects,
    getByProjectsId,
    addResources,
    getResources,
    getByResourcesId,
    getProjectResources,
    addTasks,
    getTasks,
    getByTasksId,
    getProjectTasks

}
//for project
async function addProjects(projects) {
    return await db("projects")
        .insert(projects)
}

function getProjects() {
    return db("projects")
}

function getByProjectsId(id) {
    return db("projects")
        .where({ id })
        .first()
}

//for resources
async function addResources(resources) {
    return await db("resources")
        .insert(resources)
}

function getResources() {
    return db("resources")
}

function getByResourcesId(id) {
    return db("resources")
        .where({ id })
        .first()
}
function getProjectResources(project_id) {
    return db("resources as r")
        .join("project_resources as pr", "r.id", "pr.resource_id")
        .join("projects as p", "p.id", "pr.project_id")
        .select("r.id", "r.name", "r.description")
        .where({ "c.project_id": id })
}

//for tasks
async function addTasks(tasks) {
    return await db("tasks")
        .insert(tasks)
}

function getTasks() {
    return db("tasks")
}

function getByTasksId(id) {
    return db("tasks")
        .where({ id })
        .first()
}
function getProjectTasks(project_id) {
    return db("tasks as t")
        .join("projects as p", "p.id", "t.project_id" )
        .select("t.id", "t.note", "t.description", "t.completed", "p.name", "p.description" )
        .where({ project_id })
}