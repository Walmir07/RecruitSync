import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Questrial, Radio_Canada } from "next/font/google";
import NavBar from "../componentes/NavBar/NavBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar></NavBar>
      <h1 className={styles.titulo}>RecruitSync</h1>

      <div className={styles.descricao_rs}>
        <p>"Explore oportunidades educacionais e inscreva-se para se tornar um bolsista! Descubra oportunidades de desenvolvimento acadêmico e profissional sob medida para você. Seja parte da próxima geração de líderes. Inscreva-se agora!"</p>
      </div>

      <div className={styles.perguntas}>
          <h3 className={styles.pergunta}> <strong className={styles.destaque}>O que há no RecruitSync?</strong> Tudo que você precisa para ser um bolsista!</h3>
      </div>
      
    </main>
  );
}

