import DisplayProjeto from '../DisplayProjeto/DisplayProjeto'
import './galeriaProjetos.css'

export default function GaleriaProjetos(){
    return(
    <div className="contGaleria">
      <h1 className='titulos'>Seus projetos</h1>
      <hr className='linha'></hr>
      <div className='projetos'>
        <DisplayProjeto nomeProjeto="IF-GECOMP"></DisplayProjeto>
        <DisplayProjeto nomeProjeto="Programação"></DisplayProjeto>
        <DisplayProjeto nomeProjeto="NT Tecnology"></DisplayProjeto>
        <DisplayProjeto nomeProjeto="Projeto 3"></DisplayProjeto>
        <DisplayProjeto nomeProjeto="Projeto 4"></DisplayProjeto>
        <DisplayProjeto nomeProjeto="Projeto 5"></DisplayProjeto>
        <DisplayProjeto nomeProjeto="Projeto 6"></DisplayProjeto>
        <DisplayProjeto nomeProjeto="Projeto 7"></DisplayProjeto>
        <DisplayProjeto nomeProjeto="Projeto 8"></DisplayProjeto>
      </div>
    </div>
    )
}