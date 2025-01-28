import db from './db';

export async function getCoordenadoresById(id) {
        const connection = await db.connect();
        const coordenadores = await connection.query('SELECT * FROM coordenador WHERE id_coordenador = $1', [id]);
        return coordenadores.rows[0];
}