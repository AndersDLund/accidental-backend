exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table){
    table.increments('id');
    table.string('full_name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('organization');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
