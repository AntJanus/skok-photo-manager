
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('files', table => {
      table.increments();
      table.string('name');
      table.string('file_name');
      table.string('full_path');
      table.string('file_type');
      table.string('index_id');
      table.float('size');
      table.timestamps();
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTable('files');
};
