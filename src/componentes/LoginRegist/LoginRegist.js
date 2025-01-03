import Link from 'next/link'
import './loginregist.css'

export default function LoginRegist(){
    return(
        <div className='login-regist'>
          <Link className='login' href="/login">Log in</Link>
          <Link className='signup' href="/cadastro">Sign up</Link>
        </div>
    )
}