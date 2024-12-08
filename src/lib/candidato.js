import db from "./db";

export async function getCandidatosById(){
    const connection = await db.connect();
    const candidatos = await connection.query('SELECT * FROM candidato WHERE id = $1', [id]);
    return candidatos.rows[0];
}