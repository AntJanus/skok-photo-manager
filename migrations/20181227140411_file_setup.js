
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
      table.string('hash');
      table.float('size');
      table.string('simple_date');
      table.timestamps();
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTable('files');
};
