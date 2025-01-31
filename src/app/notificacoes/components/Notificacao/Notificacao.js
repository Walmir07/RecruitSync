import './Notificacao.css'
import Image from 'next/image'
import LogoRS from '../../../../../public/logo-rs.png'
import Link from 'next/link'

// Fazer relação entre projeto e candidatos no Banco de dados, para buscar o candidato de acordo com o projeto inscrito.

/**
 * Usar projeto.logo
 * Buscar usuário dele
 * Usar projeto.nome
*/

export default function Notificacao({fotoCandidato, nomeCandidato, nomeProjeto}){
    return(
        <div className='container-not'>
            <section className='secao1'>
              <Image src={LogoRS} className='logo-projeto' alt="Logo do projeto"></Image>
              <p className='nome-candidato'>{nomeCandidato} se inscreveu no projeto: {nomeProjeto}</p>
              </section>
              <section className='secao2'>
                  <button className='btn-excluir'>Excluir</button>
              </section>  
        </div>
    )
}