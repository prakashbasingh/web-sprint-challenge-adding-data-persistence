
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { name: "Computer", description: "Mac Book Pro" },
        { name: "Conference Room", description: "reserve early" },
        { name: "Microphone", description: "we all should have to communicate online" },
        { name: "Delivery Van", description: "to supply computers" }
      ]);
    });
};
