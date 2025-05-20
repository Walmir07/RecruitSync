import './ListaInscritos.css';
import DisplayCandidato from '../DisplayCandidato/DisplayCandidato';
import FotoTeste from './../../../../../public/sem-foto.png';
import db from '@/lib/db';

export default async function ListaInscritos(){

    const candidatos = await db.query("select * from candidato");
    const quantCandidato = await db.query("select count(*) from candidato");


    return(
        <div className='lista-inscritos'>
            <p>Quantidade de candidatos: {quantCandidato.rows[0].count}</p>
            {candidatos.rows.map( c => (<DisplayCandidato fotoCandidato={FotoTeste} nomeCandidato={c.nome} telaCandidato={`/candidato/${c.id_candidato}`}></DisplayCandidato>))}
        </div>
    )
}