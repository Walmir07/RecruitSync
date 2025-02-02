"Use client"
import './projeto.css'
import Image from 'next/image'
import db from '@/lib/db'
import Link from 'next/link'

export default async function Projeto({logo, nome, coordenador, instituicao, descricao, situacao}){

    return(
        <div className='contProjeto'>
            <section className="sessao1">
                <Image width={120} height={120} className='logo-do-projeto' src={logo} alt="Logo do projeto"></Image>
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
                <Link href="/acessar-inscritos" className='lnk-acessar-inscritos'>Acessar candidatos</Link>
                <div className="sect-btn">
                    <button className='btn-excluir'>Excluir</button>
                </div>
            </section>
        </div>
    )
}