import Link from 'next/link'
import './loginregist.css'

export default function LoginRegist(){
    return(
        <div className='login-regist'>
          <Link className='login' href="/rotas/login">Log in</Link>
          <Link className='signup' href="/rotas/cadastro">Sign up</Link>
        </div>
    )
}