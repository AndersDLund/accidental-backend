
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {full_name: 'Anders Lund', email: "anders@email.com", organization: "Galvanize", password: "testing123"}
      ]);
    });
};
