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
    return db("project_resources")
        .join("resources", "resources.id", "project_resources.resource_id")
        .select("resources.id", "resources.name", "resources.description")
        .where({ project_id })
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
    return db("project_tasks")
        .join("tasks", "tasks.id", "project_tasks.task_id")
        .select("tasks.id", "tasks.name", "tasks.description")
        .where({ project_id })
}