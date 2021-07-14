const { row, rows } = require("../../pg")

module.exports.model = {
  item: (id) => {

    const Sql = `select * from announcements where category_id = $1`

     return  rows(Sql, id)
  },
  category: () => {
    const sql = `select * from categories`

    return rows(sql)
  }

}
