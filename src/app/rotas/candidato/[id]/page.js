import styles from "./page.module.css";
import InfoCandidato from "@/app/componentes/InfoCandidato/InfoCandidato";

export default async function Candidato({ params }){

    return(
        <div>
            <InfoCandidato id={params.id}/>
        </div>
    )
};