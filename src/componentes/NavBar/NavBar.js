import './navbar.css'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo-oficial-rs.png'
import ModalContatos from '../ModalContatos/ModalContatos'

export default function NavBar() {
    return (
      <main className="navbar">
        <Image
           src={Logo}
           className='logo'
           width={80}
           height={80}
           alt="Logo da aplicação"
        >
        </Image>

        <h1 className='titulo-nav'>RecruitSync</h1>

        <div className="links">
         <ul>
           <li><Link href="/app">Home</Link></li>
           <li><ModalContatos></ModalContatos></li>
         </ul>
        </div>
         
        <div className='login-regist'>
          <Link className='login' href="/login">Log in</Link>
          <Link className='signup' href="/cadastro">Sign up</Link>
        </div>
        
      </main>
    );
  }
  