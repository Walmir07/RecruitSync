import { NextResponse } from 'next/server'
import pool from "@/lib/db";

export async function GET() {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM projeto')
    client.release()
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Erro listando projetos:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}


export async function POST(request) {
  try {
    const { nomeProjeto, instituicao, criterios, vagas, descricao, linkProva, dinamicaGrupo, textoEntrevista, analiseCurricular } = await request.json()
    console.log('Dados recebidos:', nomeProjeto, instituicao, criterios, vagas, descricao, linkProva, dinamicaGrupo, textoEntrevista, analiseCurricular)

    const client = await pool.connect()
    console.log('Conectado ao banco de dados')

    const result = await client.query(
      'INSERT INTO projeto (id_projeto, nome, instituicao, criterios, vagas, situacao, descricao, link_prova, dinamica_grupo, texto_entrevista, analise_curricular) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
      [parseInt(Math.random()*100+1), nomeProjeto, instituicao, criterios, vagas,"Em andamento", descricao, linkProva, dinamicaGrupo, textoEntrevista, analiseCurricular]
    )
    console.log('Resultado da inserção:', result)

    client.release()
    return NextResponse.json(result.rows[0], { status: 201 }) 
  } catch (error) {
    console.error('Error adding projeto:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}


export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    const client = await pool.connect();
    await client.query('DELETE FROM projeto WHERE id = $1', [id] );
    client.release();
    return NextResponse.json({ message: 'Projeto removido com sucesso' });
  } catch (error) {
    console.error('Erro removendo aluno:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}




/*

Código antigo do POST

export async function POST(request) {
  try {
    const { nomeProjeto, instituicao, criterios } = await request.json()
    const client = await pool.connect()
    const result = await client.query(
      'INSERT INTO projeto (nomeProjeto, instituicao, criterios) VALUES ($1, $2, $3) RETURNING *',
      [nomeProjeto, instituicao, criterios]
    )
    client.release()
    return NextResponse.json(result.rows[0], { status: 201 })
  } catch (error) {
    console.error('Error adding projeto:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}*/