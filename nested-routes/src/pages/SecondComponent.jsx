import { Outlet, useNavigate } from 'react-router-dom'
import styles from './SecondComponent.module.css'
export default function SecondComponent() {
  const navigate = useNavigate()
  return (
    <div style = {{marginTop:'100px'}}>
      
      SecondComponent
    </div>
  )
}
