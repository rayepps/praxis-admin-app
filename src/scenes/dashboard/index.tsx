import Menu from '../../ui/Menu'
import { Outlet } from 'react-router-dom'
import Header from '../../ui/Header'

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <div className="w-48">
          <Menu />
        </div>
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
