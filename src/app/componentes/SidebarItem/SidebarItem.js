import './sidebarItem.css'
import Link from 'next/link'

const SidebarItem = ({ Icone, Texto, Caminho }) => {
  return(
    <main className='container'>
      <Link href={Caminho} className='link'>
        <img src={Icone} className='icones'></img>
       <h1 className='titulo'>{Texto}</h1>
      </Link>
    </main>
  )
}

export default SidebarItem