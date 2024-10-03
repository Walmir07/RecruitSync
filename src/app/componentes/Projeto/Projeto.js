import './projeto.css'
import Image from 'next/image'

export default function Projeto({logo, nome, coordenador, instituicao, descricao, situacao}){
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
                <div className='situacao'>{situacao}</div>
                <button className='acessar-inscritos'>Acessar inscritos</button>
            </section>
        </div>
    )
}