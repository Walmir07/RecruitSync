import './displayCandidato.css'
import Image from 'next/image'
import Google from '../../../../public/logo-google.png'

export default function({fotoCandidato, nomeCandidato}){
    return(
        <div className='display-test'>
          <Image scr={Google} className='foto-candidato'></Image>
          <p className='nome-candidato'>{nomeCandidato}</p>
        </div>
    )
}