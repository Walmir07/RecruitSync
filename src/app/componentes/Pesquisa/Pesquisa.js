import './pesquisa.css'
import Lupa from '../../../../public/search.svg'


function Pesquisa(){
  return(
    <div className='pesquisa'>
      <img src={Lupa} className='lupa'></img>
      <input type='search' className='input' placeholder='Buscar item do menu'></input>
    </div>
  )
}

export default Pesquisa