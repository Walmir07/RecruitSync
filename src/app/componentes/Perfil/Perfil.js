import './perfil.css'
import SemPerfil from '../../../../public/sem-foto.png'
//import PropTypes from 'prop-types'

function Perfil({ fotoPerfil, nomeUsuario}){
  return(
    <div className='perfil'>
      <img src={fotoPerfil || SemPerfil} className='imagem'>
      </img>
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