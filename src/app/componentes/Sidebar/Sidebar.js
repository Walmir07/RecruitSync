import './sidebar.css'
import Link from 'next/link'
import Pesquisa from '../Pesquisa/Pesquisa'
import Close from '../../../../public/close.svg'
import SidebarItem from '../SidebarItem/SidebarItem'
import Perfil from '../Perfil/Perfil'
import House from '../../../../public/house.svg'
import User from '../../../../public/user.svg'
import File from '../../../../public/file.svg'
import Bell from '../../../../public/bell.svg'

const Sidebar = ({active}) => {

  const closeSidebar = () => {
    active(false)
  }
  
  return(
    <main className='container' sidebar={active}>
      <img src={Close} className='close' onClick={closeSidebar}></img>

    <div className='conteudo'>
      
      <Perfil></Perfil>
      <Pesquisa></Pesquisa>
      
        <SidebarItem Icone={House} Texto='Início' Caminho='/rotas/home'></SidebarItem>
        <SidebarItem Icone={User} Texto='Perfil' Caminho='/rotas/perfil'></SidebarItem>
        <SidebarItem Icone={File} Texto='Projetos' Caminho='/rotas/projetos'></SidebarItem>
        <SidebarItem Icone={Bell} Texto='Notificações' Caminho='/rotas/notificacoes'></SidebarItem>
      </div>
    </main>
  )
}

export default Sidebar