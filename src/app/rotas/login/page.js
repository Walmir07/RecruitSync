import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import Imagem from '../../../../public/logo-rs.png'

export default function Login(){
    return(
        <main className={styles.main}>
      <div className={styles.area1}>

        <Image className={styles.imagem} src={Imagem} alt="Logo"></Image>

      </div>

      <div className={styles.area2}>
        
          <form className={styles.form}>

            <section className={styles.titulos}>
                <h1 className={styles.title}>Access your account</h1>
            </section>

         <section className={styles.inputs}>
                <input type='email' className={styles.input2} placeholder='Email'></input>
         </section>

         <section className={styles.inputs}>
                <input type='password' className={styles.input2} placeholder='Enter your passwrod'></input>
         </section>

         <section className={styles.sectioncheck}>
              <input className={styles.checkbox} type='checkbox'></input>
              <p className={styles.text2}>Save your password</p>
         </section>

         <section className='inputs'>
              <Link  href='/rotas/home'><button className={styles.criar} type='submit'>Access Account</button></Link>
         </section>

          </form>
      
      </div>
    </main>
    )
}