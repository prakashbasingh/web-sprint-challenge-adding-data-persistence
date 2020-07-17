
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
        tbl.string("description");
        tbl.boolean("completed").notNullable().defaultTo(false)
    })
    .createTable("resources", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
        tbl.string("description");
    })
    .createTable("tasks", tbl => {
        tbl.increments();
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
        tbl.string("description").notNullable();
        tbl.string("notes");
        tbl.boolean("completed").notNullable().defaultTo(false)
    })
    .createTable("project_resources", tbl => {
        tbl.increments()
        tbl.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")

        tbl.integer("resource_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("resources")

    })
    // .createTable("project_tasks", tbl => {
    //     tbl.increments()
    //     tbl.integer("project_id")
    //         .unsigned()
    //         .notNullable()
    //         .references("id")
    //         .inTable("projects")

    //     tbl.integer("task_id")
    //         .unsigned()
    //         .notNullable()
    //         .references("id")
    //         .inTable("tasks")

    // })

};

exports.down = function(knex) {
  return knex.schema
        // .dropTableIfExists("project_tasks")
        .dropTableIfExists("project_resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects")
};
