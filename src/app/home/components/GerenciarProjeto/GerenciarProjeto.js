'use client'
import './gerenciarProjeto.css'
import Image from 'next/image'
import Lupa from '../../../../../public/search.svg'
import Projeto from '../../../../componentes/Projeto/Projeto'
import LogoMandacode from '../../../../../public/logo-mandacode.jpeg'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function GerenciarProjeto(){
    const [projetos, setProjetos] = useState([]);

    const fetchProjetos = async () => {
        const res = await fetch('/api/projetos');
        const data = await res.json();
        setProjetos(data);
    };

    useEffect(() => {
        fetchProjetos();
    }, [projetos]);
    

    return(

        <div className='contGerenciar'>

               <div className='pesquisar'>
                   <Image src={Lupa} className='Lupa' alt="Imagem de lupa"></Image>
                   <input className='pesquisarProjeto' type='search' placeholder='Buscar projeto'></input>
                   <Link href="/criacao-de-projetos" className='criarNovo'>Criar novo</Link>
               </div>
               
            <div className='projetos-criados'>

              {projetos.map(p => (
              <Projeto
                    id={p.id_projeto}
                    /*logo={`/${p.logo}`}*/
                    logo={p.logo ? `/${p.logo}` : '/img-reuniao1.jpeg'}
                    nome={(p.nome)} 
                    coordenador={p.coordenador} 
                    instituicao={p.instituicao} 
                    descricao={p.descricao} 
                    situacao={p.situacao}
                    onExclude={() => setProjetos([...projetos])}
                    >
              </Projeto>))}

            </div>
        </div>
    )
}