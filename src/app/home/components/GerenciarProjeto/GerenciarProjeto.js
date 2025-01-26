import './gerenciarProjeto.css'
import Image from 'next/image'
import Lupa from '../../../../../public/search.svg'
import Projeto from '../../../../componentes/Projeto/Projeto'
import LogoMandacode from '../../../../../public/logo-mandacode.jpeg'
import Link from 'next/link'
import db from '@/lib/db'


export default async function GerenciarProjeto(){
    
    const projetos = await db.query("SELECT * FROM projeto");

    
    const deleteProjeto = async (id) => {
        const response = await fetch(`/api/projetos/${id}`, {
            method: 'DELETE'
        });
    }
    

    return(

        <div className='contGerenciar'>

               <div className='pesquisar'>
                   <Image src={Lupa} className='Lupa' alt="Imagem de lupa"></Image>
                   <input className='pesquisarProjeto' type='search' placeholder='Buscar projeto'></input>
                   <Link href="/criacao-de-projetos" className='criarNovo'>Criar novo</Link>
               </div>
               
            <div className='projetos-criados'>

              {projetos.rows.map(p => (
              <Projeto
                    /*logo={`/${p.logo}`}*/
                    logo={p.logo ? `/${p.logo}` : '/img-reuniao1.jpeg'}
                    nome={(p.nome)} 
                    coordenador={p.coordenador} 
                    instituicao={p.instituicao} 
                    descricao={p.descricao} 
                    situacao={p.situacao}
                    >
              </Projeto>))}

            </div>
        </div>
    )
}