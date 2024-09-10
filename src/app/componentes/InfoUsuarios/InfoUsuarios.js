import './infoUsuarios.css'
import SemPerfil from '../../../../public/sem-foto.png'
import Link from 'next/link'
import Image from 'next/image'
import Config from '../../../../public/gear.svg'
import Sair from '../../../../public/close.svg'

export default function InfoUsuarios(){

    //Dados para teste

    const dados = {
      nome: "Walmir Lima da Silva",
      email: "Walmir.lima@gmail.com",
      contato: "(85) 99914-2549"
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