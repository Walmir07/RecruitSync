import './gerenciarProjeto.css'
import Image from 'next/image'
import Logo from '../../../../public/logo-rs.jpeg'
import ImgReuniao1 from '../../../../public/img-reuniao1.jpeg'
import ImgReuniao2 from '../../../../public/img-reuniao2.jpg'



export default function GerenciarProjeto(){
    return(
        <div className='contGerenciar'>
            <div className='contsOpcoes'>
                <h1 className='titulos'>Pesquisar projeto</h1>
                <div className='pesquisar'>
                    <Image className='imagens' src={ImgReuniao1}></Image>
                    <button className='buttons'>Pesquisar projeto</button>
                </div>
            </div>

            <Image src={Logo}></Image>

            <div className='contsOpcoes'>
                <h1 className='titulos'>Criar projeto</h1>
                <div className='criar'>
                    <Image className='imagens' src={ImgReuniao2}></Image>
                    <button className='buttons'>Criar projeto</button>
                </div>
            </div>
        </div>
    )
}