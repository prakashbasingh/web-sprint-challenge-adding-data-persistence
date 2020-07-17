
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {name: "Complete the Sprint", description: "make sure all the MVPs are completed"},
        {name: "Retro", description: "Make sure submit retro before 11"},
        {name: "Code", description: "Keep practicing the code to keep refreshed"}
      ])
    });
};
