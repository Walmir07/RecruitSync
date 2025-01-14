import styles from './page.module.css';
import NavBarGeral from '@/componentes/NavBarGeral/NavBarGeral';
import ListaNotificacoes from './components/ListaNotificacoes/ListaNotificacoes';

export default function Notificacoes(){
    return(
        <main className={styles.main}>
            <NavBarGeral></NavBarGeral>
            <h1 className={styles.titulo}>Notificações: {/*projeto.nome*/}</h1>
            <ListaNotificacoes></ListaNotificacoes>
        </main>
    )
}