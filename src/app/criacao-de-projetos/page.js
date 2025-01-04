'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Questrial, Radio_Canada } from "next/font/google";
import CriarProjeto from "@/componentes/CriarProjeto/CriarProjeto";
import NavBarGeral from "@/componentes/NavBarGeral/NavBarGeral";


export default function Home() {


  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetchProjetos()
  }, [])

  const fetchProjetos = async () => {
    const response = await fetch('/api/projetos')
    if(response.ok){
      const data = await response.json()
    setProjetos(data)
    } else {
      console.error('Erro ao buscar os projetos', response.status, response.statusText);
    }
  }

  const addProjeto = async (projeto) => {
    const response = await fetch('/api/projetos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projeto),
    })
    if (response.ok) {
      fetchProjetos() 
    }else { console.error('Falha ao adicionar projeto:', await response.text()); }
  }

  //Deletar projeto:

  /*const deleteProjeto = async (id) => {
    const response = await fetch(`/api/projetos/${id}`, {
      method: 'DELETE',
    })
    if (response.ok) {
      fetchProjetos()
    }
  }*/


  return (
    <main className={styles.main}>
      
      <NavBarGeral></NavBarGeral>
      <CriarProjeto onAddProjeto={addProjeto}></CriarProjeto>

    </main>
  );
}

