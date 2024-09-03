import './perfil.css'
import SemPerfil from '../../../../public/sem-foto.png'
import Image from 'next/image'
//import PropTypes from 'prop-types'

function Perfil({ fotoPerfil, nomeUsuario}){
  return(
    <div className='perfil'>
      <Image src={fotoPerfil || SemPerfil} className='imagem'>
      </Image>
      <div className='retangulo'>
        <h2>{nomeUsuario} Walmir Lima</h2>
      </div>
    </div>
  )
}

/*Perfil.propTypes = {
  fotoPerfil: PropTypes.string
}

Perfil.defaultProps = {
  fotoPerfil: '../../Imagens/sem-foto.png'
}*/

export default Perfil