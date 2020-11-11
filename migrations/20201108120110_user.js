
exports.up = async function(knex) {
    await knex.schema.createTable('user', table => {
        table.increments('id')
        table.string('first_name')
            .notNullable()
        table.string('last_name')
            .notNullable()
        table.string('family')
        table.string('technologies')
            .notNullable()
        table.string('hobbies')
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('user')
};
