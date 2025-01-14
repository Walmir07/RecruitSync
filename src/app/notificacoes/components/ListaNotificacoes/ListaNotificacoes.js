import './ListaNotificacoes.css';
import Notificacao from '../Notificacao/Notificacao';
import db from '@/lib/db';

export default async function ListaNotificacoes(){

    const candidatos = await db.query("select * from candidato");
    const quantCandidato = await db.query("select count(*) from candidato")


    return(
        <div className='lista-notificacoes'>
            <p>Você possui {quantCandidato.rows[0].count} notificações</p>
            {candidatos.rows.map( c => (<Notificacao nomeCandidato={c.nome}></Notificacao>))}
        </div>
    )
}