import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Questrial, Radio_Canada } from "next/font/google";
import CriarProjeto from "@/app/componentes/CriarProjeto/CriarProjeto";
import NavBar from "@/app/componentes/NavBar/NavBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar></NavBar>
      
      <CriarProjeto></CriarProjeto>

    </main>
  );
}

