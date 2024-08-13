import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Questrial, Radio_Canada } from "next/font/google";
import NavBar from "./componentes/NavBar/NavBar";
import Descricao from "./componentes/Descricao/Descricao";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar></NavBar>
      <h1 className="tittle">RecruitSync</h1>
        <Descricao></Descricao>
      <h3>O que há no RecruitSync?Tudo que você precisa para ser um bolsista</h3>
    </main>
  );
}

