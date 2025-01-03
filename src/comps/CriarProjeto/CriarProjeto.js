import { useState } from 'react'
import './CriarProjeto.css'
import Link from 'next/link'

export default function CriarProjeto({ onAddProjeto }){
    
    const [nomeProjeto, setNomeProjeto] = useState('');
    const [instituicao, setInstituicao] = useState('');
    const [criterios, setCriterios] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const projeto = { nomeProjeto, instituicao, criterios };
      
        try {
          const res = await fetch('/api/projetos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(projeto),
          });
      
          if (!res.ok) {
            // Se não for bem-sucedido, jogamos um erro
            const errorData = await res.json();
            throw new Error(`Erro ao criar projeto: ${errorData.error || res.statusText}`);
          }
      
          const data = await res.json();
          console.log('Projeto criado com sucesso:', data);
          onAddProjeto(data); // Supondo que você tenha essa função para atualizar a lista de projetos
      
        } catch (error) {
          console.error('Erro ao criar o projeto:', error);
          // Exibir um feedback para o usuário, caso queira
          alert('Falha ao criar o projeto. Tente novamente.');
        }
      
        setNomeProjeto('');
        setInstituicao('');
        setCriterios('');
      };
           
      

    /*const handleSubmit = (e) => {
        e.preventDefault()
        onAddProjeto({ nomeProjeto, instituicao, criterios })
        setNomeProjeto('')
        setInstituicao('')
        setCriterios('')
  }*/


    return(
        <div className='container-criar'>

            <form className='formulario-criacao' onSubmit={handleSubmit}>
                <section className='informacoes'>
                    <section className='sect-img'>
                        <input type="file" className="imagem-projeto"></input>
                    </section>
                    <section className='sect-inputs'>
                        <input 
                            type='text' 
                            className='inputs' 
                            placeholder='Nome do projeto'
                            value={nomeProjeto}
                            onChange={(e) => setNomeProjeto(e.target.value)}
                        ></input>
                        <input 
                            type='text' 
                            className='inputs' 
                            placeholder='Instituição'
                            value={instituicao}
                            onChange={(e) => setInstituicao(e.target.value)}
                        ></input>
                        <input 
                            type='text' 
                            className='inputs' 
                            placeholder='Critérios'
                            value={criterios}
                            onChange={(e) => setCriterios(e.target.value)}
                        ></input>
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
                   <button type="submit" className='criar-projeto'>Criar Projeto</button>
                </section>
            </form>

        </div>
    )
}