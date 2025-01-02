import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Questrial, Radio_Canada } from "next/font/google";
import NavBar from "../comps/NavBar/NavBar";
import Descricao from "../comps/Descricao/Descricao";
import Pergunta from "../comps/Pergunta/Pergunta";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar></NavBar>
      <h1 className={styles.titulo}>RecruitSync</h1>
        <Descricao></Descricao>
        <Pergunta></Pergunta>
    </main>
  );
}

