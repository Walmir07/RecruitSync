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
const [linkProva, setLinkProva] = useState('');
const [dinamicaGrupo, setDinamicaGrupo] = useState('');
const [textoEntrevista, setTextoEntrevista] = useState('');
const [analiseCurricular, setAnaliseCurricular] = useState(false);
const [image, setImage] = useState(null);

const handleAnaliseCurricularChange = (event) => {
    setAnaliseCurricular(event.target.value === 'true'); // Atualiza o estado com true ou false
};

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
    logo: image,
    linkProva,
    dinamicaGrupo,
    textoEntrevista,
    analiseCurricular,
  };

  console.log(novoProjeto);

  addProjeto(novoProjeto); // Adiciona novo projeto usando a API
  //onAddProjeto({ nomeProjeto, instituicao, criterios, vagas, descricao });
  setNomeProjeto('');
  setInstituicao('');
  setCriterios('');
  setVagas('');
  setDescricao('');
  projetoCriado();
  setLinkProva('');
  setDinamicaGrupo('');
  setTextoEntrevista('');
  setAnaliseCurricular(null);
  setImage(null);
}

  
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
                            id='nomeProjeto'
                            name='nomeProjeto'
                            type='text'
                            className='inputs'
                            placeholder='Nome do projeto'
                            value={nomeProjeto}
                            onChange={(e) => setNomeProjeto(e.target.value)}
                        ></input>

                        <input 
                            required
                            id='instituicao'
                            name='instituicao'
                            type='text' 
                            className='inputs' 
                            placeholder='Instituição'
                            value={instituicao}
                            onChange={(e) => setInstituicao(e.target.value)}
                        ></input>

                        <input
                            required
                            id='criterios'
                            name='criterios' 
                            type='text' 
                            className='inputs' 
                            placeholder='Critérios'
                            value={criterios}
                            onChange={(e) => setCriterios(e.target.value)}
                        ></input>

                        <input
                            required
                            id='vagas'
                            name='vagas'
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
                            id='descricao'
                            name='descricao' 
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
                                 <input 
                                    type="radio" 
                                    id="op1"
                                    name="analiseCurricular" 
                                    value="true" 
                                    checked={analiseCurricular === true}
                                    onChange={handleAnaliseCurricularChange}
                                />
                                <label className='text-lab' htmlFor="op1">Atribuir análise</label>
                             </div>
                            
                            <div>
                                 <input 
                                    type="radio" 
                                    id="op2" 
                                    name="analiseCurricular" 
                                    value="false" 
                                    checked={analiseCurricular === false}
                                    onChange={handleAnaliseCurricularChange} 
                                 />
                                 <label className='text-lab' htmlFor="op2">Não atribuir análise</label>
                            </div>
                        </section>
                    </section>

                    <section className='etapa2'>
                        <h4 className='titulos-etapas'>Prova de seleção</h4>
                        <input
                            id='linkProva'
                            name='linkProva'
                            className='link-prova' 
                            type="text" 
                            placeholder="Link do formulário"
                            value={linkProva}
                            onChange={(e) => setLinkProva(e.target.value)}
                        ></input>
                    </section>

                    <section className='etapa3'>
                        <h4 className='titulos-etapas'>Dinâmica de grupo</h4>
                        <input
                            id='dinamicaGrupo'
                            name='dinamicaGrupo'
                            className='dinamica-grupo'
                            type="text" 
                            placeholder="Dinâmica de grupo"
                            value={dinamicaGrupo}
                            onChange={(e) => setDinamicaGrupo(e.target.value)}
                        ></input>
                    </section>

                    <section className='etapa4'>
                        <h4 className='titulos-etapas'>Entrevista de seleção</h4>
                        <input 
                            id='textoEntrevista'
                            name='textoEntrevista'
                            className='texto-entrevista' 
                            type="text" 
                            placeholder="Informações entrevista"
                            value={textoEntrevista}
                            onChange={(e) => setTextoEntrevista(e.target.value)}
                        ></input>
                    </section>

                </section>
                <section className='sect-botao'>
                   <button type="submit" className='criar-projeto'>Criar Projeto</button>
                </section>
            </form>
        </div>
    )
}