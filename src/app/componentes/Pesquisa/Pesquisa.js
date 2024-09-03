import './pesquisa.css'
import Lupa from '../../../../public/search.svg'
import Image from 'next/image'

function Pesquisa(){
  return(
    <div className='pesquisa'>
      <Image src={Lupa} className='lupa'></Image>
      <input type='search' className='input' placeholder='Buscar item do menu'></input>
    </div>
  )
}

export default Pesquisa