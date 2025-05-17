"use client";

import './navbargeral.css'
import Link from 'next/link';
import Image from 'next/image';
import Bars from '../../../public/bars.svg'
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

export default function NavBarGeral() {
  
  //let valorInicial = false;

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

    return (
      <main className="navbargeral">
        <Image
           src={Bars}
           className='bars'
           onClick={showSidebar}
           alt="Imagem de barrinhas de Navbar"
        >
        </Image>
        {sidebar && <Sidebar active={setSidebar}></Sidebar>}
        <h1 className='titulo-header'>RecruitSync</h1>
      </main>
    );
  }