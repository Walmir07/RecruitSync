import './navbargeral.css'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../../public/logo-rs.jpeg'
import LoginRegist from '../LoginRegist/LoginRegist';

export default function NavBarGeral() {
    return (
      <main className="navbargeral">
        <Image
           src={Logo}
           className='logo'
           width={80}
           height={80}
           alt="Logo da aplicação"
        >
        </Image>
        <h1>RecruitSync</h1>
      </main>
    );
  }