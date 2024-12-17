import './DisplayCandidato.css'
import Image from 'next/image'
import Google from '../../../../public/logo-google.png'
import Link from 'next/link'

export default function({fotoCandidato, nomeCandidato, telaCandidato}){
    return(
        <Link href={telaCandidato} className='display-test'>
          <Image scr={Google} className='foto-candidato' alt="Foto do candidato"></Image>
          <p className='nome-candidato'>{nomeCandidato}</p>
        </Link>
    )
}