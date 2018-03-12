exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('car_model', function(table){
    table.increments('id');
    table.integer('make_id');
    table.string('model').notNullable();

      table.foreign('make_id').references('id').inTable('car_make').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('car_model');
};
