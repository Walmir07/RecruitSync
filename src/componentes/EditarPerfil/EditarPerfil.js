import './EditarPerfil.css'
import Image from 'next/image'
import SemPerfil from '../../../public/sem-foto.png'
import db from '@/lib/db';
import { getCoordenadoresById } from '@/lib/coordenador'

export default async function EditarPerfil({ id }){

    const coordenador = await getCoordenadoresById(id);
    // const gerente = await db.query("select * from gerente where id = $1", [params.id])

    console.log(coordenador)
    const dados = coordenador;

    return(
        <div className='container-editar'>

            <form className='formulario-edicao'>

                <section className='sect-infos'>
                    <section className='sect-info1'>
                        <Image className='foto-perfil' src={SemPerfil} alt="Foto de perfil do usuário"></Image>
                    </section>
                    <section className='sect-info2'>
                        <h2 className='titulos'>Nome:</h2>
                        <input 
                            type='text'
                            className='inputs' 
                            placeholder='Novo nome'
                            value={dados.nome}
                        ></input>
                        <h2 className='titulos'>Contato:</h2>
                        <input 
                            type='text' 
                            className='inputs' 
                            placeholder='Novo contato'
                            value={dados.contato}
                        ></input>
                    </section>
                </section>
                <section className='section-acoes'>
                    <button className='cancelar'>Cancelar edição</button>
                    <button className='salvar'>Salvar alterações</button>
                </section>
                
            </form>

        </div>
    )
}