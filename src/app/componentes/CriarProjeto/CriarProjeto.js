import './CriarProjeto.css'
import testLogo from './../../../../public/logo-rs.png'

export default function CriarProjeto(){
    return(
        <div className='container-criar'>

            <form className='formulario-criacao'>
                <section className='informacoes'>
                    <section className='sect-img'>
                        <input type="file" className="imagem-projeto"></input>
                    </section>
                    <section className='sect-inputs'>
                        <input type='text' className='inputs' placeholder='Nome do projeto'></input>
                        <input type='text' className='inputs' placeholder='Instituição'></input>
                        <input type='text' className='inputs' placeholder='Critérios'></input>
                        <input type='text' className='inputs' placeholder='Vagas'></input>
                    </section>
                    <section className='sect-desc'>
                        <textarea className='textarea' placeholder='Descrição do projeto'></textarea>
                    </section>
                </section>
                <section className='etapas'>
                    
                </section>
            </form>

        </div>
    )
}