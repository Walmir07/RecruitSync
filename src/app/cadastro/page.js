//import './cadastro.css'
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'
import Google from '../../../public/logo-google.png'
import Apple from '../../../public/logo-apple.png'
import Imagem from '../../../public/logo-rs.png'
import Logomarca from '@/componentes/Logomarca/Logomarca';

export default function Cadastro(){
  return(
    <main className={styles.main}>
      <div className={styles.area1}>

        <Logomarca></Logomarca>

      </div>

      <div className={styles.area2}>
        
          <form className={styles.form}>

            <section className={styles.titulos}>
                <h1 className={styles.title}>Criar uma conta</h1>
                <p className={styles.text1}>Já possui uma conta? <Link className={styles.text3} href="/login">Log in</Link></p> 
            </section>

         <section className={styles.inputs}>
                <input type='text' className={styles.input} placeholder='Nome'></input>
                <input type='text' className={styles.input} placeholder='Sobrenome'></input>
         </section>

         <section className={styles.inputs}>
                <input type='email' className={styles.input2} placeholder='Digite seu email'></input>
         </section>

         <section className={styles.inputs}>
                <input type='password' className={styles.input2} placeholder='Digite sua senha'></input>
         </section>

         <section className={styles.espaco}>
              
         </section>

         <section className='inputs'>
              <Link href='/login'><button className={styles.criar} type='submit'>Criar conta</button></Link>
         </section>

         <section className={styles.rows}>
             <hr className={styles.linha} /> <p className={styles.owr}>Ou registre com</p>  <hr className={styles.linha} />
         </section>

         <section className={styles.opcoes}>
              <Link href="" type='text' className={styles.google}>
                 <Image className={styles.logos} src={Google}></Image> <h3>Google</h3>
              </Link>

              <Link href="" type='text' className={styles.apple}>
                 <Image className={styles.logos} src={Apple}></Image> <h3>Apple</h3>
              </Link>
         </section>

          </form>
      
      </div>
    </main>
  )
}

