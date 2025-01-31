import './DisplayCandidato.css'
import Image from 'next/image'
import Link from 'next/link'

export default function({nomeCandidato, telaCandidato, fotoCandidato}){
    return(
        <Link href={telaCandidato} className='display-test'>
          <Image src={fotoCandidato} className='foto-candidato' alt="Foto do candidato"></Image>
          <p className='nome-candidato'>{nomeCandidato}</p>
        </Link>
    )
}