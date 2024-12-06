import './ListaInscritos.css'
import DisplayCandidato from '../DisplayCandidato/DisplayCandidato'

export default function ListaInscritos(){
    return(
        <div className='lista-inscritos'>
            <p>Quantidade de inscritos: {/*Quantidade do banco com count*/}</p>
            <DisplayCandidato nomeCandidato="Ana Heloísa Oliveira"/>
            <DisplayCandidato nomeCandidato="Itallo Nathan Andrade"/>
            <DisplayCandidato nomeCandidato="Pedro Henrique"/>
            <DisplayCandidato nomeCandidato="Ana Heloísa Oliveira"/>
            <DisplayCandidato nomeCandidato="Itallo Nathan Andrade"/>
            <DisplayCandidato nomeCandidato="Ana Heloísa Oliveira"/>
            <DisplayCandidato nomeCandidato="Itallo Nathan Andrade"/>
            <DisplayCandidato nomeCandidato="Pedro Henrique"/>
            <DisplayCandidato nomeCandidato="Ana Heloísa Oliveira"/>
            <DisplayCandidato nomeCandidato="Itallo Nathan Andrade"/>
        </div>
    )
}