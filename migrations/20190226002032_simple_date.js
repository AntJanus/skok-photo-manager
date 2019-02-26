
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('files', table => {
      table.string('simple_date');
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('files', table => {
      table.dropColumn('simple_date');
    });
};
