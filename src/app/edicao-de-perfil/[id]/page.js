import styles from './page.module.css'
import NavBarGeral from "@/componentes/NavBarGeral/NavBarGeral";
import EditarPerfil from '@/componentes/EditarPerfil/EditarPerfil';

export default function EdicaoDePerfil({ params }){
    return(
        <main className={styles.main}>
            <NavBarGeral></NavBarGeral>
            <EditarPerfil id={params.id}></EditarPerfil>
        </main>
    )
}