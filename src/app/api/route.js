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
    const { nomeProjeto, instituicao, criterios } = await request.json();

    // Verificar se todos os campos obrigatórios foram enviados
    if (!nomeProjeto || !instituicao || !criterios) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes' }, { status: 400 });
    }

    // Verificar se o tipo dos campos está correto, se necessário
    if (typeof nomeProjeto !== 'string' || typeof instituicao !== 'string' || typeof criterios !== 'string') {
      return NextResponse.json({ error: 'Campos inválidos' }, { status: 400 });
    }

    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO projeto (nomeProjeto, instituicao, criterios) VALUES ($1, $2, $3) RETURNING *',
      [nomeProjeto, instituicao, criterios]
    );
    client.release();

    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Erro ao adicionar projeto:', error);
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}


/*

Código antigo

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