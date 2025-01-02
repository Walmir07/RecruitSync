import Link from "next/link";
import Image from "next/image";
import styles from './page.module.css'
import NavBarGeral from "@/comps/NavBarGeral/NavBarGeral";
import GerenciarProjeto from "@/comps/GerenciarProjeto/GerenciarProjeto";

export default function Home(){
    return(
        <main className={styles.main}>
            <NavBarGeral></NavBarGeral>
            <GerenciarProjeto></GerenciarProjeto>
        </main>
    )
}