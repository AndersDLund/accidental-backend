
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('user_car', function(table){
    table.increments('id');
    table.integer('user_id');
    table.integer('model_id');
    table.string('plate');

    table.foreign('user_id').references('id').inTable('users').onDelete('cascade');
    table.foreign('model_id').references('id').inTable('car_model').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_car');
};
