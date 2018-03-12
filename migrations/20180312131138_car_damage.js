
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('car_damages', function(table){
    table.integer('user_car_id');
    table.integer('damage_type_id');

      table.foreign('user_car_id').references('id').inTable('user_car').onDelete('cascade');
      table.foreign('damage_type_id').references('id').inTable('damage_types').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('car_damages');
};
