import './sidebarItem.css'
import { ContainerIt } from './style.js'
import Link from 'next/link'

const SidebarItem = ({ Icone, Texto, Caminho }) => {
  return(
    <ContainerIt>
      <Link to={Caminho} className='link'>
        <img src={Icone} className='icones'></img>
       <h1 className='titulo'>{Texto}</h1>
      </Link>
    </ContainerIt>
  )
}

export default SidebarItem