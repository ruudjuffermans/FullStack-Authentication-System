const pool = require("../db");

// async function readField(field) {
  
//   const result = await pool.query(
//     `INSERT INTO field (position, name, description, units, group_id, field_type, access_level, mandatory)
//      VALUES ($1) RETURNING *`,
//     [field]
//   );

//   return result.rows[0];
// }

async function create(name) {
  const result = await pool.query(
    `INSERT INTO example ( name )
     VALUES ($1) 
     RETURNING *`,
    [name]
  );

  return result.rows[0];
}

// async function updateField(id, name, description, position, units, group_id, field_type, access_level, mandatory) {
//   const result = await pool.query(
//     `UPDATE field 
//      SET name = $2, description = $3, position = $4, units = $5, group_id = $6, 
//          field_type = $7, access_level = $8, mandatory = $9
//      WHERE id = $1
//      RETURNING *`,
//     [id, name, description, position, units, group_id, field_type, access_level, mandatory]
//   );
//   return result.rows[0];
// }

// async function deleteField(id) {
//   const result = await pool.query(
//     `DELETE FROM field
//      WHERE id = $1
//      RETURNING *`,
//     [id]
//   );
//   return result.rows[0];
// }


module.exports = {
  create,
};
