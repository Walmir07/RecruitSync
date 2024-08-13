import Image from "next/image";
//import styles from "./page.module.css";
import Link from "next/link";
import Imagem from "../../../../public/imagem-rs.png"

export default function Login(){
    return(
        <main className="">

            <div className="div-img">
                <Image src={Imagem}></Image>
            </div>

            <div className="div-form">
                <section>
                    <h1>Criar uma conta</h1>
                    <p className="texto">Não possui uma conta? <Link href="#">Cadastrar</Link></p>
                </section>
            </div>

        </main>
    )
}