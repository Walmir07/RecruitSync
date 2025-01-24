import DisplayProjeto from '../../../../componentes/DisplayProjeto/DisplayProjeto'
import './galeriaProjetos.css';
import db from "@/lib/db";

export default async function GaleriaProjetos(){

    const projetos = await db.query("select * from projeto")


    return(
    <div className="contGaleria">
      <h1 className='titulos'>Seus projetos</h1>
      <hr className='linha'></hr>
      <div className='projetos'>
        {projetos.rows.map( p => (<DisplayProjeto nomeProjeto={p.nome}></DisplayProjeto>))}
      </div>
    </div>
    )
}