import './projeto.css'
import Image from 'next/image'

export default function Projeto({logo, nome, coordenador, instituicao, descricao, situacao}){
    return(
        <div className='contProjeto'>
            <session className="sessao1">
                <Image className='logo-do-projeto' src={logo}></Image>
            </session>
            <session className="sessao2">
                <p>Nome: </p> <p>{nome}</p>
                <hr></hr>
                <p>Coordenador: </p> <p>{coordenador}</p>
                <hr></hr>
                <p>Instituição: </p> <p>{instituicao}</p>
                <hr></hr>
            </session>
            <session className="sessao3">
                <div className='descricao'>
                    <p>{descricao}</p>
                </div>
            </session>
            <session className="sessao4">
                <button>{situacao}</button>
                <button className=''>Acessar inscritos</button>
            </session>
        </div>
    )
}