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
    }, []); // Removendo o projeto do Array

    //Código para resolver os problemas:

    const handleDelete = async (id) => {
        const response = await fetch(`/api/projetos/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            setProjetos(projetos.filter(p => p.id_projeto !== id)); // Atualiza o estado após excluir o projeto
        } else {
            // Tratar erro na exclusão
            console.error('Erro ao excluir projeto:', response.status);
        }
    };
    

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
                    key={p.id_projeto}
                    id={p.id_projeto}
                    /*logo={p.logo ? `/${p.logo}` : '/img-reuniao1.jpeg'}*/
                    logo={p.logo ? p.logo : '/img-reuniao1.jpeg'}
                    nome={(p.nome)} 
                    coordenador={p.coordenador} 
                    instituicao={p.instituicao} 
                    descricao={p.descricao} 
                    situacao={p.situacao}
                    onExclude={() => handleDelete(p.id_projeto)}
                    >
              </Projeto>))}

            </div>
        </div>
    )
}