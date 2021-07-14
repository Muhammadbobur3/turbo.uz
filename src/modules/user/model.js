const {row} = require("../../pg")

const model = {
    userUpdate: ({ username, surname, password }) => {

        const SQL = `
          update users set user_username = coalesce($1, user_username), user_surname = coalesce($2, user_surname), password = coalesce(crypt($3, gen_salt('bf')), password) where user_id = $1
           returning
           user_username,
           user_surname,
           user_username || ' ' || user_surname as fullname
        `
        return row(SQL, username, surname, password)
    }
}

module.exports = model