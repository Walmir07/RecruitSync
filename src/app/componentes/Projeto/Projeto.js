import './projeto.css'
import Image from 'next/image'
import db from '@/lib/db'
import Link from 'next/link'

export default async function Projeto({logo, nome, coordenador, instituicao, descricao, situacao}){

    /*const projetos = await db.query("SELECT * FROM projeto")

    let situacaoP = projetos.situacao;
    console.log(situacaoP)

    function corSituacao({situacaoP}){

        let cor;

        if(situacaoP === "Concluído"){
            cor = "#18902c"
        }
        else if(situacaoP === "Em andamento"){
            cor = "#D5D519"
        }
        else{
            cor = "#e50e0e;"
        }
        return cor
    }*/


    return(
        <div className='contProjeto'>
            <section className="sessao1">
                <Image className='logo-do-projeto' src={logo}></Image>
            </section>
            <section className="sessao2">
                <p><strong>Nome:</strong> {nome}</p> 
                <hr></hr>
                <p><strong>Coordenador:</strong> {coordenador}</p>
                <hr></hr>
                <p><strong>Instituição:</strong> {instituicao}</p>
                <hr></hr>
            </section>
            <section className="sessao3">
                <div className='descricao'>
                    <p className='descricao-projeto'>{descricao}</p>
                </div>
            </section>
            <section className="sessao4">
                <div className='situacao' /*style={{backgroundColor: {cor}}}*/>{situacao}</div>
                <Link href="/rotas/acessar-inscritos" className='lk-acessar-inscritos'>Acessar inscritos</Link>
            </section>
        </div>
    )
}