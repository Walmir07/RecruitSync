import styles from './page.module.css'
import NavBarGeral from "@/comps/NavBarGeral/NavBarGeral";
import EditarPerfil from '@/comps/EditarPerfil/EditarPerfil';

export default function EdicaoDePerfil({ params }){
    return(
        <main className={styles.main}>
            <NavBarGeral></NavBarGeral>
            <EditarPerfil id={params.id}></EditarPerfil>
        </main>
    )
}