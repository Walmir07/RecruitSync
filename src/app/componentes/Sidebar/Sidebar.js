import './sidebar.css'
import Link from 'next/link'
//import Close from '../../Imagens/close.svg'
//import { Container, Conteudo } from './style.js'
//import SidebarItem from '../SidebarItem/index'
//import Perfil from '../Perfil/index'
//import Pesquisa from '../Pesquisa/index'
//import House from '../../Imagens/house.svg'
//import User from '../../Imagens/user.svg'
//import File from '../../Imagens/file.svg'
//import Bell from '../../Imagens/bell.svg'

const Sidebar = ({active}) => {

  const closeSidebar = () => {
    active(false)
  }
  
  return(
    <Container sidebar={active}>
      <img src={Close} className='close' onClick={closeSidebar}></img>

    <Conteudo>
      
      <Perfil></Perfil>
      <Pesquisa></Pesquisa>
      
        <SidebarItem Icone={House} Texto='Início' Caminho='/Tela-inicial'></SidebarItem>
        <SidebarItem Icone={User} Texto='Perfil' Caminho='/Perfil'></SidebarItem>
        <SidebarItem Icone={File} Texto='Projetos' Caminho='/Projetos'></SidebarItem>
        <SidebarItem Icone={Bell} Texto='Notificações' Caminho='/Notificacoes'></SidebarItem>
      </Conteudo>
    </Container>
  )
}

export default Sidebar