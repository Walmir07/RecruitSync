import './Logomarca.css'
import Image from 'next/image'
import Imagem from '../../../../public/logomarca-rs.png'

export default function(){
    return(
        <div className='logomarca'>
            <Image className="imagem" src={Imagem} alt="Logo"></Image>
            <h1 className='titulo-logomarca'>RecruitSync</h1>
        </div>
    )
}