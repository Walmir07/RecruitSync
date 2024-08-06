import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Questrial, Radio_Canada } from "next/font/google";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>RecruitSync</h1>
      <h3>O RecruitSync é a melhor plataforma de gerenciamento de projetos</h3>
      <Link href="./rotas/login">Abrir a página rotas</Link>
    </main>
  );
}

