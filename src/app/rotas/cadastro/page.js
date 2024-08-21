//import './cadastro.css'
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'
import Google from '../../../../public/logo-google.png'
import Apple from '../../../../public/logo-apple.png'
import Imagem from '../../../../public/imagem-rs.png'

export default function Cadastro(){
  return(
    <main className={styles.main}>
      <div className={styles.area1}>

        <Image className={styles.imagem} src={Imagem}></Image>

      </div>

      <div className={styles.area2}>
        
          <form className={styles.form}>

            <section className={styles.titulos}>
                <h1 className={styles.title}>Create an account</h1>
                <p className={styles.text1}>Already have an account? <Link className={styles.text3} href="Log in">Log in</Link></p> 
            </section>

         <section className={styles.inputs}>
                <input type='text' className={styles.input} placeholder='First name'></input>
                <input type='text' className={styles.input} placeholder='Last name'></input>
         </section>

         <section className={styles.inputs}>
                <input type='email' className={styles.input2} placeholder='Email'></input>
         </section>

         <section className={styles.inputs}>
                <input type='password' className={styles.input2} placeholder='Enter your passwrod'></input>
         </section>

         <section className={styles.sectioncheck}>
              <input className={styles.checkbox} type='checkbox'></input>
              <p className={styles.text2}>I agree to the <Link className={styles.text3} href="">Terms e Conditions</Link> </p>
         </section>

         <section className='inputs'>
              <button className={styles.criar} type='submit'>Create account</button>
         </section>

         <section className={styles.rows}>
             <hr className={styles.linha} /> <p className={styles.owr}>Or regist with</p>  <hr className={styles.linha} />
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

