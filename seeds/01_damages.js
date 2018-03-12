
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('damage_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('damage_types').insert([
        {classification: 'scratch'},
        {classification: 'chip'},
        {classification: 'dent'},
        {classification: 'curb rash'},
      ]);
    });
};
