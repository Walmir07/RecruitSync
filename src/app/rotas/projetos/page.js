import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Questrial, Radio_Canada } from "next/font/google";
import NavBarGeral from "../../componentes/NavBarGeral/NavBarGeral";
import GerenciarProjeto from "@/app/componentes/GerenciarProjeto/GerenciarProjeto";

export default function Projetos() {
  return (
    <main className={styles.main}>
      <NavBarGeral></NavBarGeral>
      <GerenciarProjeto></GerenciarProjeto>
    </main>
  );
}