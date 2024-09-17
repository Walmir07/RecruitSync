import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Questrial, Radio_Canada } from "next/font/google";
import NavBarGeral from "../../componentes/NavBarGeral/NavBarGeral";
import InfoUsuarios from "../../componentes/InfoUsuarios/InfoUsuarios";
import GaleriaProjetos from "../../componentes/GaleriaProjetos/GaleriaProjetos";

export default function Perfil() {
  return (
    <main className={styles.main}>
      <NavBarGeral></NavBarGeral>
      <h1 className={styles.titulo}>Perfil</h1>
      <InfoUsuarios></InfoUsuarios>
      <GaleriaProjetos></GaleriaProjetos>
    </main>
  );
}