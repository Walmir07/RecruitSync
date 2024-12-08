import './InfoCandidato.css'
import { getCandidatosById } from '@/lib/candidato'

export default async function InfoCandidato({ id }){

    const candidato = await getCandidatosById(id);
    console.log(candidato)
    const dados = candidato;

    return(
        <div>
            <p>O id {dados.id} é do candidato {dados.nome}</p>
        </div>
    )
}