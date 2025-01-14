import './Notificacao.css'
import Image from 'next/image'
import LogoMandacode from '../../../../../public/logo-mandacode.jpeg'
import Link from 'next/link'

// Fazer relação entre projeto e candidatos no Banco de dados, para buscar o candidato de acordo com o projeto inscrito.

/**
 * Usar projeto.logo
 * Buscar usuário dele
 * Usar projeto.nome
*/

export default function Notificacao({fotoCandidato, nomeCandidato}){
    return(
        <div className='container-not'>
          <Image scr={LogoMandacode} className='logo-projeto' alt="Logo do projeto"></Image>
          <p className='nome-candidato'>{nomeCandidato} se inscreveu no projeto: {/* projeto.nome */} *Nome do projeto* </p>
          <button className='btn-excluir'>Excluir</button>
        </div>
    )
}