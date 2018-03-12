
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('car_make', function(table){
    table.increments('id');
    table.string('make').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('car_make');
};
