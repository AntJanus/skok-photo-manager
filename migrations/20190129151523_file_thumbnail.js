
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('files', table => {
      table.string('thumbnail_path');
      table.text('tiny_thumbnail');
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('files', table => {
      table.dropColumns(['thumbnail_path', 'tiny_thumbnail']);
    });
};
