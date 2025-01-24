import Link from "next/link";
import Image from "next/image";
import styles from './page.module.css'
import NavBarGeral from "@/componentes/NavBarGeral/NavBarGeral";
import GerenciarProjeto from "@/app/home/components/GerenciarProjeto/GerenciarProjeto";

export default function Home(){
    return(
        <main className={styles.main}>
            <NavBarGeral></NavBarGeral>
            <GerenciarProjeto></GerenciarProjeto>
        </main>
    )
}