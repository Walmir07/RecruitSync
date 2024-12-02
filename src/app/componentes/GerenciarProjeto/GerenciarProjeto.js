import './gerenciarProjeto.css'
import Image from 'next/image'
import Lupa from '../../../../public/search.svg'
import Projeto from '../Projeto/Projeto'
import Google from '../../../../public/logo-google.png'
import Link from 'next/link'
import db from '@/lib/db'


export default async function GerenciarProjeto(){
    
    const projetos = await db.query("SELECT * FROM projeto")

    return(

        <div className='contGerenciar'>

               <div className='pesquisar'>
                   <Image src={Lupa} className='Lupa'></Image>
                   <input className='pesquisarProjeto' type='search' placeholder='Buscar projeto'></input>
                   <Link href="/rotas/criacao-de-projetos" className='criarNovo'>Criar novo</Link>
               </div>
               
            <div className='projetos-criados'>

              {projetos.rows.map(p => (<Projeto /*logo={p.logo}*/ nome={(p.nome)} /*coordenador={p.coordenador}*/ /*instituicao={p.instituicao}*/ descricao={p.descricao} situacao={p.situacao}></Projeto>))}

              {/*<Projeto logo={Google} nome='Google' coordenador='Walmir' instituicao='Google.com' descricao='“Explore oportunidades educacionais e inscreva-se para se tornar um bolsista!
Descubra oportunidades de desenvolvimento acadêmico e profissional sob medida
para você. Seja parte da próxima geração de líderes. Inscreva-se agora!”' situacao='Em andamento'></Projeto>

<Projeto logo={Google} nome='Google' coordenador='Walmir' instituicao='Google.com' descricao='“Explore oportunidades educacionais e inscreva-se para se tornar um bolsista!
Descubra oportunidades de desenvolvimento acadêmico e profissional sob medida
para você. Seja parte da próxima geração de líderes. Inscreva-se agora!”' situacao='Em andamento'></Projeto>

<Projeto logo={Google} nome='Google' coordenador='Walmir' instituicao='Google.com' descricao='“Explore oportunidades educacionais e inscreva-se para se tornar um bolsista!
Descubra oportunidades de desenvolvimento acadêmico e profissional sob medida
para você. Seja parte da próxima geração de líderes. Inscreva-se agora!”' situacao='Em andamento'></Projeto>*/}

            </div>
        </div>
    )
}