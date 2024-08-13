import './navbar.css'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/logo-rs.jpeg'

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
        <h1>RecruitSync</h1>
      <div className="links">
         <ul>
          <li><Link href="#">Home</Link></li>
           <li><Link href="#">Contato</Link></li>
           <li><Link href="#">Sobre</Link></li>
           <li><Link href="#">Mais</Link></li>
         </ul>
        </div>
         
        <div className='login-regist'>
          <Link className='login' href="#">Log in</Link>
          <Link className='signup' href="#">Sign up</Link>
        </div>
        
      </main>
    );
  }
  