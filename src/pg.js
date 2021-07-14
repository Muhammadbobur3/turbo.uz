const {Pool} = require("pg")

const pool = new Pool({
  host: "localhost",
  database: "turbo2",
  user: "muhammadbobur",
  password: "1234",
  port: "5432"
})

const rows = async (SQL, ...params) => {

  const client = await pool.connect()

  try{
    const {rows} = await client.query(SQL,params)
    return await rows
  }
  catch(err){
    console.log(err.message)
  }
  finally{
    await client.release()
  }
}

const row = async (SQL, ...params) => {

  const client = await pool.connect()

  try{
    const {rows: [row]} = await client.query(SQL,params)

    return row
  }
  catch(err){
    console.log(err.message)
  }
  finally{
    client.release()
  }
}

module.exports = {
  rows,
  row
}