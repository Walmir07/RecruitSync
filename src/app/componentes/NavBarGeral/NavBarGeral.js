import './navbargeral.css'
import Link from 'next/link';
import Image from 'next/image';
import Bars from '../../../../public/bars.svg'
import LoginRegist from '../LoginRegist/LoginRegist';
//import { useState } from 'react';

export default function NavBarGeral() {

  //const [sidebar, setSidebar] = useState(false);
  //const showSidebar = () => setSidebar(!sidebar);

    return (
      <main className="navbargeral">
        <Image
           src={Bars}
           className='bars'
           //onClick={showSidebar}
        >
        </Image>
        <h1>RecruitSync</h1>
      </main>
    );
  }