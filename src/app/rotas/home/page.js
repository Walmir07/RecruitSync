import Link from "next/link";
import Image from "next/image";
import styles from './page.module.css'
import NavBarGeral from "@/app/componentes/NavBarGeral/NavBarGeral";

export default function Home(){
    return(
        <main className={styles.main}>
            <NavBarGeral></NavBarGeral>
            <h1 className="titulo-home">Tela de home</h1>
        </main>
    )
}