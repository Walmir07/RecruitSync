import styles from "./page.module.css";
import NavBarGeral from "@/app/componentes/NavBarGeral/NavBarGeral";
import InfoCandidato from "@/app/componentes/InfoCandidato/InfoCandidato";

export default async function Candidato({ params }){

    return(
        <div>
            <NavBarGeral></NavBarGeral>
            <h1 className={styles.titulo}>Perfil do candidato: {/*projeto.nome*/}</h1>
            <InfoCandidato id={params.id}/>
        </div>
    )
};