import './ListaInscritos.css'
import DisplayCandidato from '../DisplayCandidato/DisplayCandidato'

export default function ListaInscritos(){
    return(
        <div className='lista-inscritos'>
            <p>Aqui estará a lista</p>
            <DisplayCandidato nomeCandidato="Ana Heloísa Oliveira"/>
            <DisplayCandidato nomeCandidato="Itallo Nathan Andrade"/>
            <DisplayCandidato nomeCandidato="Pedro Henrique"/>
        </div>
    )
}