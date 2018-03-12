

exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('damage_types', function(table){
    table.increments('id');
    table.string('classification').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('damage_types');
};
