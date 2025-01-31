import './InfoCandidato.css'
import { getCandidatosById } from '@/lib/candidato'
import FotoTeste from './../../../../../public/sem-foto.png'
import Image from 'next/image';

export default async function InfoCandidato({ id }){

    const candidato = await getCandidatosById(id);
    console.log(candidato)
    const dados = candidato;

    return(
        <div className="info-candidatos">
            <section className='cont1'>
                    <section className='sect-info1'>
                        <Image className="foto-candidato" src={FotoTeste} alt="Foto de perfil do candidato"></Image>
                    </section>
                    <section className='sect-info2'>
                        <h2 className="titulos">Nome:</h2>
                            <div className="sessoes">{dados.nome}</div>
                        <h2 className="titulos">Contato:</h2>
                            <div className="sessoes">{dados.contato}</div>
                        <h2 className="titulos">CRE:</h2>
                            <div className="sessoes">{dados.cre}</div>
                    </section>
                    <section className='sect-info3'>
                        <h2 className="titulos">Email:</h2>
                            <div className="sessoes">{dados.email}</div>
                        <h2 className="titulos">Matrícula:</h2>
                            <div className="sessoes">{dados.matricula}</div>
                    </section>
            </section> 

            <section className='linha'>
                <hr></hr>
            </section>

            <section className='cont2'>
                    <h2 className="titulos">Link do currículo:</h2>
                    <div className="link-curriculo">{dados.curriculo}</div>
            </section>

            <section className='botoes'>
                    <button className='btn-reprovar'>Reprovar</button>
                    <button className='btn-aprovar'>Aprovar</button>
            </section>

        </div>
    )
}