import styles from "./page.module.css";
import NavBarGeral from "../../../comps/NavBarGeral/NavBarGeral";
import ListaInscritos from "@/comps/ListaInscritos/ListaInscritos";

export default function AcessarInscritos({ params }) {
  return (
    <main className={styles.main}>
      <NavBarGeral></NavBarGeral>
      <h1 className={styles.titulo}>Candiatos do projeto: {/*projeto.nome*/}</h1>
      <ListaInscritos></ListaInscritos>
    </main>
  );
}