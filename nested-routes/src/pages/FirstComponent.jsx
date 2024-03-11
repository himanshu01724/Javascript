import { Outlet, useNavigate } from 'react-router-dom'
import styles from './FirstComponent.module.css'

export default function FirstComponent() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>FirstComponent</h1>
      <button onClick={()=>navigate('second')}>Route</button>  
      <button onClick = {()=>navigate('third')}>Route2</button>
      <Outlet/>
    </div>
  )
}
