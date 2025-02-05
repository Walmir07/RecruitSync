import './sidebar.css'
import Link from 'next/link'
import Image from 'next/image'
import Pesquisa from '../Pesquisa/Pesquisa'
import Close from '../../../public/close.svg'
import SidebarItem from '../SidebarItem/SidebarItem'
import Perfil from '../Perfil/Perfil'
import House from '../../../public/house.svg'
import User from '../../../public/user.svg'
import File from '../../../public/file.svg'
import Bell from '../../../public/bell.svg'
//import db from '../../../lib/db.js'

//const gerente = await db.query("select * from gerente where id = $1", params.id)
//console.log(gerente)
//const dados = gerente.rows[0];

function Sidebar({ active }) {
  
  function closeSidebar() {
    active(false);
  }

  return (
    <div className='container' sidebar={active}>
      <div><Image src={Close} className='close' onClick={closeSidebar} alt='Fechar'></Image></div>

      <div className='conteudo'>
        <Perfil></Perfil>
        <Pesquisa></Pesquisa>

        <SidebarItem Icone={House} Texto='Início' Caminho='/home'></SidebarItem>
        <SidebarItem Icone={User} Texto='Perfil' Caminho={'/perfil/1'}/*{`/perfil/${dados.id}`}*/></SidebarItem>{/*Dados manuais*/}
        <SidebarItem Icone={Bell} Texto='Notificações' Caminho='/notificacoes'></SidebarItem>
      </div>
    </div>
  )
}

export default Sidebar;