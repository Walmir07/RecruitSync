import db from "./db";

export async function getCandidatosById(id){
    const connection = await db.connect();
    const candidatos = await connection.query('SELECT * FROM candidato WHERE id_candidato = $1', [id]);
    return candidatos.rows[0];
}