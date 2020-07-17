
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { project_id: 1, description: "Build boilerplate", notes: "Do it quickly" },
        { project_id: 1, description: "Finish API", notes: "Just Like That" },
        { project_id: 2, description: "Build front boilerplate", notes: "Easy" },
        { project_id: 2, description: "Code front end", notes: "Easy peasy" },
      ]);
    });
};
