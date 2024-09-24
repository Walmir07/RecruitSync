import './projeto.css'
import Image from 'next/image'

export default function Projeto({logo, nome, coordenador, instituicao, descricao, situacao}){
    return(
        <div className='contProjeto'>
            <session>
                <Image className='logoProjeto' src={logo}></Image>
            </session>
            <session>
                <p>Nome:{nome}</p>
                <p>Coordenador:{coordenador}</p>
                <p>Instituição:{instituicao}</p>
            </session>
            <session>
                <div className='descricao'>
                    <p>{descricao}</p>
                </div>
            </session>
            <session>
                <button>{situacao}</button>
                <button className=''>Acessar inscritos</button>
            </session>
        </div>
    )
}