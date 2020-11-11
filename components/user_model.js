const db = require('../data/dbconfig')

async function add(data) {
    try {
        const id = await db('user').insert(data)
        const userInfo = findById(id)

        return userInfo
    } catch(err) {
        console.log(err)
        return { message: "User could not be added" }
    }

}

function find() {
    return db('user')
        .select()
}

function findById(id) {
    try {
        return db('user')
            .where({ id })
            .select()
        
    } catch(err) {
        console.log(err)
        return { message: `User could not be found with user id: ${id}` }
    }
}

module.exports = {
    add,
    find,
    findById
}