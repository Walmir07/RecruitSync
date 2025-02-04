"use client"

import { useState } from 'react'
import './CriarProjeto.css'
import Link from 'next/link'

export default function CriarProjeto({ onAddProjeto }){

function projetoCriado(){
  alert("Projeto criado com sucesso!");
}

const [nomeProjeto, setNomeProjeto] = useState('');
const [instituicao, setInstituicao] = useState('');
const [criterios, setCriterios] = useState('');
const [vagas, setVagas] = useState('');
const [descricao, setDescricao] = useState('');

const addProjeto = async (novoProjeto) => {
  const response = await fetch('/api/projetos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoProjeto),
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const novoProjeto = {
    nomeProjeto,
    criterios,
    descricao,
    vagas,
    situacao: "TESTE",
    coordenador: "TESTE.",
    instituicao,
    logo: "Teste..."
  };
  addProjeto(novoProjeto); // Adiciona novo projeto usando a API
  //onAddProjeto({ nomeProjeto, instituicao, criterios, vagas, descricao });
  setNomeProjeto('');
  setInstituicao('');
  setCriterios('');
  setVagas('');
  setDescricao('');
  projetoCriado();
}

// Organização de input de imagem:

const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Atualiza o estado com a imagem carregada
      };
      reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
    }
};

// Input de entrevista de seleção:
  
 return(
        <div className='container-criar'>

            <form className='formulario-criacao' onSubmit={handleSubmit}>
              
                <section className='informacoes'>
                    <section className='sect-img'>

                    <h4>Imagem do projeto</h4>

                    <label htmlFor="imageUpload" className="image-upload">
                    <input
                        type="file"
                        id="imageUpload"
                        name="image"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    <span className="add-image">{image ? "" : "+"}</span>
                    {image && <img src={image} alt="Uploaded" />}
                    </label>
                    
                    </section>

                    <section className='sect-inputs'>

                        <input 
                            required
                            type='text'
                            className='inputs'
                            placeholder='Nome do projeto'
                            value={nomeProjeto}
                            onChange={(e) => setNomeProjeto(e.target.value)}
                        ></input>

                        <input 
                            required
                            type='text' 
                            className='inputs' 
                            placeholder='Instituição'
                            value={instituicao}
                            onChange={(e) => setInstituicao(e.target.value)}
                        ></input>

                        <input
                            required 
                            type='text' 
                            className='inputs' 
                            placeholder='Critérios'
                            value={criterios}
                            onChange={(e) => setCriterios(e.target.value)}
                        ></input>

                        <input
                            required
                            type='text' 
                            className='inputs' 
                            placeholder='Vagas'
                            value={vagas}
                            onChange={(e) => {setVagas(e.target.value)}}
                        ></input>

                    </section>

                    <section className='sect-desc'>

                        <textarea
                            required 
                            className='textarea' 
                            placeholder='Descrição do projeto'
                            value={descricao}
                            onChange={(e) => {setDescricao(e.target.value)}}
                    ></textarea>

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
                        <input className='texto-entrevista' type="text" placeholder="Informações entrevista"></input>
                    </section>
                </section>
                <section className='sect-botao'>
                   <button type="submit" className='criar-projeto'>Criar Projeto</button>
                </section>
            </form>
        </div>
    )
}