import './ListaInscritos.css'
import DisplayCandidato from '../DisplayCandidato/DisplayCandidato'
import db from '@/lib/db'

export default async function ListaInscritos(){

    const candidatos = await db.query("select * from candidato");
    const quantCandidato = await db.query("select count(*) from candidato")


    return(
        <div className='lista-inscritos'>
            <p>Quantidade de inscritos: {quantCandidato.rows[0].count}</p>
            {candidatos.rows.map( c => (<DisplayCandidato nomeCandidato={c.nome} telaCandidato={`/rotas/candidato/${c.id}`}></DisplayCandidato>))}
        </div>
    )
}