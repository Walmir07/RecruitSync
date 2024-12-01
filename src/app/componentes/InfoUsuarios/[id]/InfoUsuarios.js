import './infoUsuarios.css'
import SemPerfil from '../../../../../public/sem-foto.png'
import Link from 'next/link'
import Image from 'next/image'
import Config from '../../../../../public/gear.svg'
import Sair from '../../../../../public/close.svg'
import db from '@/lib/db'

export default async function InfoUsuarios({params}){

    //const gerente = await db.query("select * from gerente where id = $1", params.id)

    //Dados fictícios para teste
    //console.log(gerente)
    //const dados = gerente.rows[0];

    const dados = {
      nome: "Walmir Lima",
      email: "walmir@gmail.com",
      contato: "(85) 99914-2549" //Teste
    }

    return(
      <div className="contUsuario">
          <div className="divFoto">
          <h2 className="tituloFoto">Foto</h2>
          <Image src={ /*fotoPerfil ||*/ SemPerfil} className="foto"></Image>
      </div>

      <div className="divInfo">
        <h2 className="titulos">Nome:</h2>
        <div className="sessoes">{dados.nome}</div>
        <h2 className="titulos">Email:</h2>
        <div className="sessoes">{dados.email}</div>
        <h2 className="titulos">Contato:</h2>
        <div className="sessoes">{dados.contato}</div>
      </div>
      
      <div className="divOpcoes">
        
        <div className="editar">
          <Link href='#'><Image className="iconesEL" src={Config}></Image></Link>
          <Link href='#'><h2 className="opcoesEL">Editar</h2></Link>
        </div>
        
        <div className="logout">
          <Link href='/rotas/login'><Image className="iconesEL" src={Sair}></Image></Link>
          <Link href='/rotas/login'><h2 className="opcoesEL">Log Out</h2></Link>
        </div>
        
      </div>
    </div>
    )
}