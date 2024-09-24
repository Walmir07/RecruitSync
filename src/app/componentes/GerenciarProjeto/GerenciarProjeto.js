import './gerenciarProjeto.css'
import Image from 'next/image'
import Lupa from '../../../../public/search.svg'
import Projeto from '../Projeto/Projeto'
import Google from '../../../../public/logo-google.png'



export default function GerenciarProjeto(){
    return(
        <div className='contGerenciar'>
            <div className='pesquisar'>
                <Image src={Lupa} className='Lupa'></Image>
                <input className='pesquisarProjeto' type='search' placeholder='Buscar projeto'></input>
            </div>
            <button className='criarNovo'>Criar novo</button>

            {/*<Projeto logo={Google} nome='Google' coordenador='Walmir' instituicao='Google.com' descricao='Esse é um projeto do google'></Projeto>*/}
        </div>
    )
}