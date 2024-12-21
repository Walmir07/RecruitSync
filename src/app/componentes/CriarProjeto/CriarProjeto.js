import './CriarProjeto.css'
import testLogo from './../../../../public/logo-rs.png'
import Link from 'next/link'

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
                    <section className='etapa1'>
                        <h4 className='titulos-etapas'>Análise curricular</h4>
                        <section className='opcoes-analise'>
                             <div>
                                 <input type="radio" id="op1" name="drone" value="huey"/>
                                <label className='text-lab' for="op1">Atribuir análise</label>
                             </div>
                            
                            <div>
                                 <input type="radio" id="op2" name="drone" value="dewey" />
                                 <label className='text-lab' for="op2">Não atribuir análise</label>
                            </div>
                        </section>
                    </section>
                    <section className='etapa2'>
                        <h4 className='titulos-etapas'>Prova de seleção</h4>
                        <input className='link-prova' type="text" placeholder="Link do formulário"></input>
                    </section>
                    <section className='etapa3'>
                        <h4 className='titulos-etapas'>Entrevista de seleção</h4>
                        <input className="entrevista" type="file" name="entrevista" accept="image/png, image/jpeg" />
                    </section>
                </section>
                <section className='sect-botao'>
                   <Link href='/rotas/home'><button className='criar-projeto'>Criar Projeto</button></Link>
                </section>
            </form>

        </div>
    )
}