import db from './db';

export async function getGerentesById(id) {
        const gerentes = await db.query('SELECT * FROM gerente WHERE id = $1', [id]);
        return gerentes.rows[0];
}