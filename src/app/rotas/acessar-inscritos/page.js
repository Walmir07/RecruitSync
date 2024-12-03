import styles from "./page.module.css";
import NavBarGeral from "../../componentes/NavBarGeral/NavBarGeral";
import ListaInscritos from "@/app/componentes/ListaInscritos/ListaInscritos";

export default function AcessarInscritos({ params }) {
  return (
    <main className={styles.main}>
      <NavBarGeral></NavBarGeral>
      <h1 className={styles.titulo}>Inscritos no projeto: {/*projeto.nome*/}</h1>
      <ListaInscritos></ListaInscritos>
    </main>
  );
}