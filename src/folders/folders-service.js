const FoldersService = {
  getAllFolders(knex) {
    return knex.select('*').from('folders_table');
  },

  insertFolder(knex, newFolder) {
    return knex
      .insert(newFolder)
      .into('folders_table')
      .returning('*')
      .then(rows => {
        return rows[0]
      });
  },

  getById(knex, id) {
    return knex
      .from('folders_table')
      .select('*')
      .where('id', id)
      .first();
  },

  deleteFolder(knex, id) {
    return knex('folders_table')
      .where({ id })
      .delete();
  },

  updateFolder(knex, id, newFolderFields) {
    return knex('folders_table')
      .where({ id })
      .update(newFolderFields);
  },
};

module.exports = FoldersService;