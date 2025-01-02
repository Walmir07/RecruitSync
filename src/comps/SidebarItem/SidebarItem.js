import './sidebaritem.css'
import Link from 'next/link'
import Image from 'next/image'

const SidebarItem = ({ Icone, Texto, Caminho }) => {
  return(
    <main className='containerIt'>
      <Link href={Caminho} className='link'>
        <Image src={Icone} className='icones' alt='Icone'></Image>
       <h1 className='titulo'>{Texto}</h1>
      </Link>
    </main>
  )
}

export default SidebarItem