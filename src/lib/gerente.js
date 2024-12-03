import db from './db';

export async function getGerentesById(id) {
        const connection = await db.connect();
        const gerentes = await connection.query('SELECT * FROM gerente WHERE id = $1', [id]);
        return gerentes.rows[0];
}