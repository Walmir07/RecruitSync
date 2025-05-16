import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import Imagem from '../../../public/logo-rs.png'
import Logomarca from '@/componentes/Logomarca/Logomarca'

export default function Login(){
    return(
        <main className={styles.main}>
      <div className={styles.area1}>

        <Logomarca></Logomarca>

      </div>

      <div className={styles.area2}>
        
          <form className={styles.form}>

            <section className={styles.titulos}>
                <h1 className={styles.title}>Acessar sua conta</h1>
                <p className={styles.text1}>Não possui uma conta? <Link className={styles.text3} href="/cadastro">Cadastrar</Link></p>
            </section>

         <section className={styles.inputs}>
                <input type='email' className={styles.input2} placeholder='Digite seu email'></input>
         </section>

         <section className={styles.inputs}>
                <input type='password' className={styles.input2} placeholder='Digite sua senha'></input>
         </section>

         <section className={styles.inputs}>
                <Link className={styles.inputs} href='/home'>
                      <button className={styles.acessar} type='submit'>Acessar conta</button>
                </Link>
         </section>

          </form>
      
      </div>
    </main>
    )
}