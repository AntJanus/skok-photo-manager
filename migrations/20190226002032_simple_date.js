exports.up = function(knex, Promise) {
  return knex.schema.table('files', table => {
    table.integer('simple_day');
    table.integer('simple_month');
    table.integer('simple_year');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('files', table => {
    table.dropColumns(['simple_day', 'simple_month', 'simple_year']);
  });
};
