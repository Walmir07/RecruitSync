import styles from "./page.module.css";
import NavBarGeral from "@/componentes/NavBarGeral/NavBarGeral";
import ListaInscritos from "@/app/acessar-inscritos/components/ListaInscritos/ListaInscritos";

export default function AcessarInscritos({ params }) {
  return (
    <main className={styles.main}>
      <NavBarGeral></NavBarGeral>
      <h1 className={styles.titulo}>Candidatos do projeto: {/*projeto.nome*/}</h1>
      <ListaInscritos></ListaInscritos>
    </main>
  );
}