//import './cadastro.css'
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css'

export default function Cadastro(){
  return(
    <main className={styles.main}>
      <div className={styles.area1}>

        

      </div>

      <div className={styles.area2}>
        
          <form className={styles.form}>

            <section>
                <h1 className={styles.title}>Create an account</h1>
                <p className={styles.text1}>Already have an account ?</p> 
                <p className={styles.text2}><Link href="Log in">Log in</Link></p>
         </section>

         <section>
                <input type='text' className={styles.butao} placeholder='First name'></input>
                <input type='text' className={styles.butao} placeholder='Last name'></input>
         </section>

         <section>
                <input type='email' className={styles.butao1} placeholder='Email'></input>
         </section>

         <section>
                <input type='password' className={styles.butao1} placeholder='Enter your passwrod'></input>
         </section>

         <section>
                <p className={styles.texto2}>I agree to the</p>
                <p className={styles.texto3}>Terms e Conditions</p>
          </section>



          </form>
      
      </div>
    </main>
  )
}

