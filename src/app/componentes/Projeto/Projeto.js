import './projeto.css'
import Image from 'next/image'

export default function Projeto({logo, nome, coordenador, instituicao, descricao, situacao}){
    return(
        <div className='contProjeto'>
            <session className="sessao1">
                <Image className='logo-do-projeto' src={logo}></Image>
            </session>
            <session className="sessao2">
                <p><strong>Nome:</strong> {nome}</p> 
                <hr></hr>
                <p><strong>Coordenador:</strong> {coordenador}</p>
                <hr></hr>
                <p><strong>Instituição:</strong> {instituicao}</p>
                <hr></hr>
            </session>
            <session className="sessao3">
                <div className='descricao'>
                    <p className='descricao-projeto'>{descricao}</p>
                </div>
            </session>
            <session className="sessao4">
                <div className='situacao'>{situacao}</div>
                <button className='acessar-inscritos'>Acessar inscritos</button>
            </session>
        </div>
    )
}