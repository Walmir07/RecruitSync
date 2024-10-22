import './CriarProjeto.css'

export default function CriarProjeto(){
    return(
        <div className='container-criar'>
            <form className='formulario-criacao'>
                <section className='section1'>
                    <section className='subsection1'>
                        <label for="logo-do-projeto"><h1>Logo</h1></label>
                        <input type='file' className="logo-do-projeto" name="logo-do-projeto"></input>
                    </section>
                    <section className='subsection2'>
                        <input className='inputs' type='text' placeholder='Nome do projeto'></input>
                        <input className='inputs' type='text' placeholder='Etapas'></input>
                        <input className='inputs' type='text' placeholder='Instituição'></input>
                        <input className='inputs' type='text' placeholder='Critérios'></input>
                        <input className='inputs' type='text' placeholder='Vagas'></input>
                    </section>
                </section>
                <section className='section2'>
                    <textarea placeholder='Descrição'></textarea>
                    <hr></hr>
                    <button className='botao-criar'>Criar Projeto</button>
                </section>
            </form>
        </div>
    )
}